# Smart_parking_PWA

# 🚗 Parking Reports PWA

Modern Progressive Web Application for documenting parking violations with photo capture and offline storage.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://legendary-heliotrope-493027.netlify.app)
[![PWA](https://img.shields.io/badge/PWA-enabled-blue)](https://legendary-heliotrope-493027.netlify.app)
[![Netlify Status](https://img.shields.io/badge/deployed-netlify-00C7B7)](https://zippy-semolina-f084e2.netlify.app/)

## 🌐 Live Demo

**[https://zippy-semolina-f084e2.netlify.app/](https://zippy-semolina-f084e2.netlify.app/)**

Try it on your mobile device! You can install it as a native app.

---

## ✨ Features

- 📸 **Camera Access** - Take photos directly from device camera
- 💾 **Offline Storage** - All data stored locally in IndexedDB
- 🔔 **Push Notifications** - Get notified when reports are saved
- 📱 **Installable** - Works as standalone mobile app
- 🎨 **Modern UI** - Glassmorphism design with gradients
- 🌙 **Dark Theme** - Beautiful dark interface
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast & Cached** - Instant loading with Service Worker
- 🖼️ **Photo Viewer** - Full-screen modal for photos
- 🔒 **Private** - All data stays on your device

---

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript ES6+
- Modern CSS (Grid, Flexbox, Variables)
- Glassmorphism & Gradient UI

### PWA Technologies
- Service Workers
- Cache API
- Web App Manifest
- IndexedDB

### Native APIs
- Camera API (getUserMedia)
- Notifications API
- Canvas API

### Hosting
- Netlify with automatic HTTPS

---

## 🚀 Quick Start

### Prerequisites
- Modern browser (Chrome 67+, Edge 79+, Safari 11.1+)
- HTTPS or localhost
- Node.js (optional, for local server)

### Local Development

**Option 1: Python**
```bash
git clone https://github.com/your-username/smart-parking-pwa.git
cd smart-parking-pwa
python -m http.server 8000
```

**Option 2: Node.js**
```bash
npm install -g http-server
http-server -p 8000
```

**Option 3: VS Code**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

Open browser: `http://localhost:8000`

---

## 📱 Install as PWA

### Android (Chrome)
1. Open app in Chrome
2. Menu (⋮) → "Install app" or "Add to home screen"
3. Confirm installation

### iOS (Safari)
1. Open app in Safari
2. Share button (↑)
3. "Add to Home Screen"
4. Confirm

---

## 📂 Project Structure

```
smart-parking-pwa/
├── index.html              # Home page
├── create.html             # Create report with camera
├── reports.html            # Reports list with modal
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker
│
├── css/
│   └── styles.css          # Modern styles
│
├── js/
│   ├── app.js              # SW registration + status
│   ├── db.js               # IndexedDB operations
│   ├── camera.js           # Camera handling
│   └── notifications.js    # Push notifications
│
└── icons/
    ├── icon-192.png        # App icon 192x192
    └── icon-512.png        # App icon 512x512
```

---

## 🎯 How It Works

### 1. Create Report
```
Camera → Capture Photo → Add Description → Save → IndexedDB
```

### 2. View Reports
```
IndexedDB → Load All → Display Grid → Click Photo → Modal View
```

### 3. Offline Mode
```
Service Worker → Cache Assets → Work Offline → Sync When Online
```

---

## 💾 Data Storage

All photos are stored as Base64 strings in IndexedDB:

```javascript
{
  id: 1,
  photo: "data:image/jpeg;base64,/9j/4AAQ...",
  description: "Illegal parking",
  timestamp: "2025-12-13T18:30:00.000Z"
}
```

**Storage Location:**
- Chrome: `~/.config/google-chrome/Default/IndexedDB/`
- Firefox: `~/.mozilla/firefox/PROFILE/storage/default/`
- Mobile: App sandbox

---

## 🔧 Configuration

### Change Theme Colors

Edit `manifest.json`:
```json
{
  "theme_color": "#667eea",
  "background_color": "#0f172a"
}
```

Edit `css/styles.css`:
```css
:root {
  --primary: #667eea;
  --accent-cyan: #4facfe;
}
```

### Update Cache Version

Edit `sw.js`:
```javascript
const CACHE_NAME = 'parking-reports-v2'; // increment version
```

---

## 🧪 Testing

### Manual Testing
- ✅ Camera access works
- ✅ Photos save to IndexedDB
- ✅ Reports display correctly
- ✅ Modal viewer opens
- ✅ Delete functionality works
- ✅ Offline mode functional
- ✅ PWA installs properly

### Lighthouse Audit
```bash
F12 → Lighthouse → Generate report
```

**Expected Scores:**
- PWA: 100/100
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+

---

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 67+     | ✅ Full |
| Edge    | 79+     | ✅ Full |
| Safari  | 11.1+   | ⚠️ Partial |
| Firefox | 44+     | ⚠️ Partial |
| Opera   | 54+     | ✅ Full |

---

## 🚢 Deployment

### Netlify

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

Or drag & drop folder to [netlify.com](https://netlify.com)

### Other Platforms
- Vercel
- GitHub Pages
- Firebase Hosting
- Surge.sh

---

## 🔐 Privacy

- 🔒 All data stored **locally** on device
- 🚫 No data sent to servers
- 🔒 No tracking or analytics
- 🔒 No user accounts required
- ✅ Complete privacy

---

## 🐛 Known Issues

1. **Safari iOS**
   - Service Worker limited in Private Mode
   - Push notifications require iOS 16.4+

2. **Storage Limits**
   - IndexedDB quota: ~50-100MB
   - ~125-250 reports max (at 400KB per photo)

3. **No Sync**
   - Data local only, not synced between devices

---

## 🔮 Future Improvements

- [ ] Backend sync
- [ ] Geolocation for reports
- [ ] Export to PDF
- [ ] Social sharing
- [ ] Advanced filters
- [ ] Cloud backup

---

## 🤝 Contributing

Pull requests welcome!

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

MIT License - feel free to use for your projects

---

## 👨‍💻 Author

**Nikita**
- GitHub: [NikitaTolstykh](https://github.com/NikitaTolstykh/)
- University: University Vizja of Warsaw

---

## 🙏 Acknowledgments

- MDN Web Docs for excellent PWA documentation
- Google Web.dev for PWA best practices
- Netlify for free hosting
- Inter font by Rasmus Andersson

---

## 📞 Support

Having issues? [Open an issue](https://www.linkedin.com/in/nikita-tolstykh/)

---

**Made with ❤️ as a university PWA project**
