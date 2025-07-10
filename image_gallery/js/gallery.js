const galleryGrid = document.querySelector('.gallery__grid');

export function renderImages(images) {
    galleryGrid.innerHTML = ''; 
    if (!images || images.length === 0) {
        galleryGrid.innerHTML = '<p class="gallery__message">Nothing found. Try a different search term.</p>';
        return;
    }
    
    images.forEach(img => {
        const item = document.createElement('div');
        item.className = 'gallery__item';
        item.dataset.id = img.id;
        
        const imageElement = document.createElement('img');
        imageElement.src = img.urls.small;
        imageElement.alt = img.alt_description || 'Unsplash Image';
        imageElement.loading = 'lazy';

        item.appendChild(imageElement);
        galleryGrid.appendChild(item);
    });
}

export function showLoading() {
    galleryGrid.innerHTML = '<p class="gallery__loader">Loading images...</p>';
}

export function showError() {
    galleryGrid.innerHTML = '<p class="gallery__error">Failed to load images. Please try again later.</p>';
}