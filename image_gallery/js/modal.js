const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal__image');
const modalCloseBtn = document.querySelector('.modal__close-btn');
const modalOverlay = document.querySelector('.modal__overlay');
const prevBtn = document.querySelector('.modal__nav-btn--prev');
const nextBtn = document.querySelector('.modal__nav-btn--next');

const mainContent = document.querySelector('.main');
const footer = document.querySelector('.footer');

let displayedImages = [];
let currentImageIndex = -1;

function openModal(imageId) {
    currentImageIndex = displayedImages.findIndex(img => img.id === imageId);
    if (currentImageIndex === -1) return;

    updateModalContent();
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    mainContent.classList.add('blurred');
    footer.classList.add('blurred');
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    mainContent.classList.remove('blurred');
    footer.classList.remove('blurred');
}

function updateModalContent() {
    if (currentImageIndex < 0 || currentImageIndex >= displayedImages.length) return;

    const imageData = displayedImages[currentImageIndex];
    if (imageData) {
        modalImage.src = imageData.urls.regular;
        modalImage.alt = imageData.alt_description || 'Unsplash Image';
    }
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % displayedImages.length;
    updateModalContent();
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + displayedImages.length) % displayedImages.length;
    updateModalContent();
}

export function initModal(images) {
    displayedImages = images;
    const galleryGrid = document.querySelector('.gallery__grid');
    
    galleryGrid.addEventListener('click', (event) => {
        const item = event.target.closest('.gallery__item');
        if (item) {
            openModal(item.dataset.id);
        }
    });
}

modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});