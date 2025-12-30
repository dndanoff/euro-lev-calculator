# Setup Instructions

## Generating Icons

Before deploying the PWA, you need to generate the icon files:

### Option 1: Using the Icon Generator (Recommended)
1. Open `create-icons.html` in your browser
2. Click "Download 192x192" to save `icon-192.png`
3. Click "Download 512x512" to save `icon-512.png`
4. Place both files in the root directory
5. Open `create-favicon.html` in your browser
6. Click "Download favicon.ico" to save the favicon
7. Place the file in the root directory

### Option 2: Create Your Own Icons
Create two PNG images:
- `icon-192.png` (192x192 pixels)
- `icon-512.png` (512x512 pixels)
- `favicon.ico` (32x32 pixels)

The icons should represent the Euro (€) and Lev (лв) symbols.

## Testing Locally

### Using Node.js
```bash
cd c:/Workspaces/Personal/EuroLevCalc
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## Testing PWA Features

1. Open the app in Chrome/Edge
2. Open DevTools (F12)
3. Go to Application tab
4. Check:
   - Manifest is loaded correctly
   - Service Worker is registered
   - Cache Storage contains files
5. Try installing the app (look for install icon in address bar)
6. Test offline mode:
   - Install the app
   - Turn off network in DevTools
   - Reload the page - it should still work

## Deployment

You can deploy this PWA to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any web server

Just upload all files to the hosting service.

## File Structure

```
EuroLevCalc/
├── index.html          # Main HTML file
├── styles.css          # Styles with theme support
├── app.js              # Application logic
├── manifest.json       # PWA manifest
├── sw.js               # Service worker
├── icon-192.png        # App icon (192x192)
├── icon-512.png        # App icon (512x512)
├── favicon.ico         # Favicon
├── create-icons.html   # Icon generator tool
├── create-favicon.html # Favicon generator tool
├── README.md           # Documentation
└── SETUP.md            # This file
```
