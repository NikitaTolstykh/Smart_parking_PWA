const CACHE_NAME = 'parking-reports-v1';
const CACHE_ASSETS = [
    './',
    './index.html',
    './create.html',
    './reports.html',
    './css/styles.css',
    './js/app.js',
    './js/camera.js',
    './js/db.js',
    './js/notifications.js',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Caching files');
                return cache.addAll(CACHE_ASSETS).catch(err => {
                    console.log('Service Worker: Some files failed to cache', err);
                });
            })
            .then(() => self.skipWaiting())
            .catch(err => console.log('Service Worker: Cache failed', err))
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Clearing old cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );

    return self.clients.claim();
});