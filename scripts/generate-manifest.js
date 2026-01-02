const fs = require('fs');
const APP_CONFIG = require('../config.js');

const manifest = {
  "name": "Euro Lev Calculator",
  "short_name": "EuroLevCalc",
  "start_url": APP_CONFIG.BASE_PATH,
  "scope": APP_CONFIG.BASE_PATH,
  "description": "Change calculator for Bulgaria's euro transition",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "orientation": "portrait",
  "lang": "en",
  "categories": ["finance", "utilities", "business"],
  "icons": [
    {
      "src": `${APP_CONFIG.BASE_PATH}icon-192.png`,
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": `${APP_CONFIG.BASE_PATH}icon-512.png`,
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
};

fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2));
console.log('manifest.json generated successfully!');
