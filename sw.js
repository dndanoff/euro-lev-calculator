importScripts('config.js');

const CACHE_NAME = `euro-lev-calc-${APP_CONFIG.CACHE_VERSION}`;
const BASE_PATH = APP_CONFIG.BASE_PATH;
const urlsToCache = [
  BASE_PATH,
  `${BASE_PATH}index.html`,
  `${BASE_PATH}styles.css`,
  `${BASE_PATH}app.js`,
  `${BASE_PATH}manifest.json`,
  `${BASE_PATH}config.js`,
  `${BASE_PATH}favicon.ico`
];

// Listen for skip waiting message
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', function(event) {
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.error('Cache addAll failed:', error);
      })
  );
});

self.addEventListener('fetch', function(event) {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then(function(response) {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the fetched response for future use
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(function(error) {
            console.error('Fetch failed:', error);
            
            // Return offline page or cached response if available
            return caches.match(`${BASE_PATH}index.html`);
          });
      })
  );
});

self.addEventListener('activate', function(event) {
  // Take control of all pages immediately
  self.clients.claim();
  
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
