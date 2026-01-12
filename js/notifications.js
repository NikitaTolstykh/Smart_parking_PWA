function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            console.log('Notification permission:', permission);
        });
    }
}

function sendBrowserNotification(title, body, options = {}) {
    if (!('Notification' in window)) {
        console.log('This browser does not support notifications');
        return;
    }

    if (Notification.permission === 'granted') {
        const notificationOptions = {
            body: body,
            icon: '/icons/icon-192.png',
            badge: '/icons/icon-192.png',
            vibrate: [200, 100, 200],
            tag: 'parking-report',
            requireInteraction: false,
            ...options
        };

        try {
            const notification = new Notification(title, notificationOptions);

            notification.onclick = () => {
                window.focus();
                notification.close();
            };

            setTimeout(() => {
                notification.close();
            }, 5000);

        } catch (error) {
            console.error('Error creating notification:', error);
        }
    } else if (Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                sendBrowserNotification(title, body, options);
            }
        });
    } else {
        console.log('Notification permission denied');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    requestNotificationPermission();
});