import { API_KEY } from './config.js';

export async function fetchImages(query = '') {
    const url = query 
        ? `https://api.unsplash.com/search/photos?page=1&per_page=12&query=${query}&client_id=${API_KEY}`
        : `https://api.unsplash.com/photos/random?count=12&client_id=${API_KEY}`;
        
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        const data = await response.json();
        return query ? data.results : data;
    } catch (error) {
        console.error("Failed to fetch images:", error);
        throw error;
    }
}