import { fetchImages } from './api.js';
import { renderImages, showLoading, showError } from './gallery.js';
import { initModal } from './modal.js';
import { initTheme } from './theme.js';

const searchForm = document.querySelector('.search__form');
const searchInput = document.querySelector('.search__input');

let allImages = [];

async function handleSearch(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    loadAndRenderImages(searchTerm);
}

async function loadAndRenderImages(query = '') {
    showLoading();
    try {
        allImages = await fetchImages(query);
        renderImages(allImages);
        initModal(allImages);
    } catch (error) {
        showError();
    }
}

function initApp() {
    initTheme();
    searchForm.addEventListener('submit', handleSearch);
    document.addEventListener('DOMContentLoaded', () => {
        loadAndRenderImages();
    });
}

initApp();