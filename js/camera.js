document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const photo = document.getElementById('photo');
    const startCameraBtn = document.getElementById('startCamera');
    const takePhotoBtn = document.getElementById('takePhoto');
    const retakePhotoBtn = document.getElementById('retakePhoto');
    const saveReportBtn = document.getElementById('saveReport');
    const photoPreview = document.getElementById('photoPreview');
    const descriptionInput = document.getElementById('description');

    let stream = null;
    let capturedPhotoData = null;

    if (!video || !canvas) return;

});

// Start camera
startCameraBtn.addEventListener('click', async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment',
                width: { ideal: 1280 },
                height: { ideal: 720 }
            }
        });

        video.srcObject = stream;
        video.style.display = 'block';
        photo.style.display = 'none';

        startCameraBtn.style.display = 'none';
        takePhotoBtn.style.display = 'inline-flex';
        retakePhotoBtn.style.display = 'none';
        photoPreview.style.display = 'none';

        showNotification('Kamera uruchomiona! 📸', 'success');
    } catch (error) {
        console.error('Error accessing camera:', error);
        showNotification('Nie można uzyskać dostępu do kamery ❌', 'error');
    }
});

// Take photo
takePhotoBtn.addEventListener('click', () => {
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw video frame to canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to data URL
    capturedPhotoData = canvas.toDataURL('image/jpeg', 0.8);

    // Display photo
    photo.src = capturedPhotoData;
    photo.style.display = 'block';
    video.style.display = 'none';

    // Stop video stream
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }

    // Update UI
    takePhotoBtn.style.display = 'none';
    retakePhotoBtn.style.display = 'inline-flex';
    photoPreview.style.display = 'block';

    showNotification('Zdjęcie zrobione! 📷', 'success');

    // Retake photo
    retakePhotoBtn.addEventListener('click', async () => {
        capturedPhotoData = null;
        photo.style.display = 'none';
        photoPreview.style.display = 'none';
        descriptionInput.value = '';

        // Restart camera
        try {
            stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'environment',
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                }
            });

            video.srcObject = stream;
            video.style.display = 'block';

            retakePhotoBtn.style.display = 'none';
            takePhotoBtn.style.display = 'inline-flex';
        } catch (error) {
            console.error('Error restarting camera:', error);
            showNotification('Nie można ponownie uruchomić kamery ❌', 'error');
        }
    });

    // Save report
    saveReportBtn.addEventListener('click', async () => {
        if (!capturedPhotoData) {
            showNotification('Najpierw zrób zdjęcie! ⚠️', 'error');
            return;
        }

        const reportData = {
            photo: capturedPhotoData,
            description: descriptionInput.value.trim(),
            timestamp: new Date().toISOString()
        };

        try {
            await saveReport(reportData);

            // Show notification
            showNotification('Raport zapisany! ✅', 'success');

            // Send browser notification
            sendBrowserNotification('Raport zapisany', 'Twój raport parkingowy został pomyślnie zapisany.');

            // Reset form after short delay
            setTimeout(() => {
                capturedPhotoData = null;
                photo.style.display = 'none';
                photoPreview.style.display = 'none';
                descriptionInput.value = '';
                retakePhotoBtn.style.display = 'none';
                startCameraBtn.style.display = 'inline-flex';

                // Optionally redirect to reports page
                // window.location.href = 'reports.html';
            }, 2000);

        } catch (error) {
            console.error('Error saving report:', error);
            showNotification('Błąd podczas zapisywania raportu ❌', 'error');
        }
    });
// Show notification
    function showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = 'notification show';
        notification.style.backgroundColor = type === 'error' ? '#f44336' : '#4CAF50';

        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
});