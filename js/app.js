
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function updateOnlineStatus() {
    const statusElement = document.getElementById('status');
    const statusText = document.getElementById('status-text');

    if (!statusElement) return;

    if (navigator.onLine) {
        statusElement.innerHTML = '<span class="status-icon">📶</span><span id="status-text">Online</span>';
        statusElement.style.color = '#4CAF50';
    } else {
        statusElement.innerHTML = '<span class="status-icon">📵</span><span id="status-text">Offline</span>';
        statusElement.style.color = '#f44336';
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

document.addEventListener('DOMContentLoaded', () => {
    updateOnlineStatus();
});

document.addEventListener('DOMContentLoaded', () => {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
});