const themeSwitcher = document.querySelector('.theme-switcher');
const themes = ['light', 'dark', 'colorful'];
const STORAGE_KEY = 'gallery_theme';

function applyTheme(theme) {
    document.body.dataset.theme = theme;
}

function saveTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
    applyTheme(savedTheme);
}

function handleThemeSwitch() {
    const currentTheme = document.body.dataset.theme;
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    applyTheme(nextTheme);
    saveTheme(nextTheme);
}

export function initTheme() {
    loadTheme();
    themeSwitcher.addEventListener('click', handleThemeSwitch);
}