const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('file-input');
const previewContainer = document.getElementById('previewContainer');
const imagePreview = document.getElementById('image-preview');
const uploadBtn = document.getElementById('uploadBtn');
const progressBar = document.querySelector('.progress');
const successMessage = document.getElementById('successMessage');

// Drag & Drop handlers
dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    handleFile(file);
});

// File input change handler
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    handleFile(file);
});

// Handle selected file
function handleFile(file) {
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            previewContainer.style.display = 'block';
            uploadBtn.style.display = 'block';
        };

        reader.readAsDataURL(file);
    }
}

// Upload simulation
uploadBtn.addEventListener('click', () => {
    document.querySelector('.progress-bar').style.display = 'block';
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            successMessage.style.display = 'block';
            uploadBtn.style.display = 'none';
        } else {
            width += 10;
            progressBar.style.width = width + '%';
        }
    }, 200);
});