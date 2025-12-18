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