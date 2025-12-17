
const DB_NAME = 'ParkingReportsDB';
const DB_VERSION = 1;
const STORE_NAME = 'reports';

// Open IndexedDB connection
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => {
            reject('Error opening database');
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            if (!db.objectStoreNames.contains(STORE_NAME)) {
                const objectStore = db.createObjectStore(STORE_NAME, {
                    keyPath: 'id',
                    autoIncrement: true
                });

                objectStore.createIndex('timestamp', 'timestamp', { unique: false });
            }
        };
    });
}

// Save report to IndexedDB
async function saveReport(reportData) {
    try {
        const db = await openDB();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const objectStore = transaction.objectStore(STORE_NAME);

            const request = objectStore.add(reportData);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject('Error saving report');
            };

            transaction.oncomplete = () => {
                db.close();
            };
        });
    } catch (error) {
        console.error('Error in saveReport:', error);
        throw error;
    }
}

async function getAllReports() {
    try {
        const db = await openDB();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readonly');
            const objectStore = transaction.objectStore(STORE_NAME);

            const request = objectStore.getAll();

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject('Error getting reports');
            };

            transaction.oncomplete = () => {
                db.close();
            };
        });
    } catch (error) {
        console.error('Error in getAllReports:', error);
        return [];
    }
}
// Delete report from IndexedDB
async function deleteReport(id) {
    try {
        const db = await openDB();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const objectStore = transaction.objectStore(STORE_NAME);

            const request = objectStore.delete(id);

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = () => {
                reject('Error deleting report');
            };

            transaction.oncomplete = () => {
                db.close();
            };
        });
    } catch (error) {
        console.error('Error in deleteReport:', error);
        throw error;
    }
}

// Get report by ID
async function getReportById(id) {
    try {
        const db = await openDB();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readonly');
            const objectStore = transaction.objectStore(STORE_NAME);

            const request = objectStore.get(id);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject('Error getting report');
            };

            transaction.oncomplete = () => {
                db.close();
            };
        });
    } catch (error) {
        console.error('Error in getReportById:', error);
        throw error;
    }
}