# Euro Lev Calculator

🌐 **Live App:** https://YOUR_USERNAME.github.io/euro-lev-calculator/

A Progressive Web App (PWA) for calculating change during Bulgaria's euro transition period (January 2026).

## Features

- **Offline Support**: Works without internet connection when installed
- **Light/Dark Theme**: Toggle between light and dark modes
- **Bilingual**: Switch between English and Bulgarian
- **Change Calculator**: Calculate change in EUR from BGN/EUR payments
- **FAQ Section**: Important information about the euro transition

## Fixed Exchange Rate

1 EUR = 1.95583 BGN

All calculations are rounded to 2 decimal places according to EU rules.

## Installation

### Desktop
1. Open the app in a modern browser (Chrome, Edge, Firefox)
2. Look for the install icon in the address bar
3. Click "Install" to add to your desktop

### Mobile
1. Open the app in your mobile browser
2. Tap the browser menu (⋮)
3. Select "Add to Home Screen" or "Install App"
4. The app will work offline once installed

## Usage

1. Enter the total amount in EUR
2. Enter the amount received in BGN and/or EUR
3. Click "Calculate Change"
4. The change will be displayed in EUR (and BGN for reference)
5. View the calculation breakdown below the results

## Development

This is a simple vanilla JavaScript PWA with no build process required.

### Files
- `index.html` - Main HTML structure
- `styles.css` - Styling with CSS variables for theming
- `app.js` - Application logic and internationalization
- `manifest.json` - PWA manifest
- `sw.js` - Service worker for offline functionality

### Running Locally

Simply open `index.html` in a web browser or use a local server:

```bash

# Using Node.js
npx http-server -p 8000
```

Then visit `http://localhost:8000`

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with PWA support

## License

Free to use during the Bulgarian euro transition period.
