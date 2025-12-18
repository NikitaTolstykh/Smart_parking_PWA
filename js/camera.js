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