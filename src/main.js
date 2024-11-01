import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '46806668-35f52dba5a140225900df36e0';
const API_URL = 'https://pixabay.com/api/';

const searchForm = document.querySelector('.search-form'); 
const searchInput = searchForm.querySelector('input[name="search"]'); 
const gallery = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader-container'); 

if (!searchForm || !searchInput || !gallery || !loaderContainer) {
    console.error('One or more elements are not found in the DOM.');
}

const lightbox = new SimpleLightbox('.gallery a');

function showLoader() {
  loaderContainer.style.display = 'flex'; 
}

function hideLoader() {
  loaderContainer.style.display = 'none'; 
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const query = searchInput.value.trim(); 
  if (query.length === 0) {
    return; 
  }

  showLoader(); 

  fetchImages(query)
    .then(images => {
      renderGallery(gallery, images);
      lightbox.refresh();
      hideLoader();
    })
   .catch(error => {
      iziToast.error({ title: 'Error', message: error.message }); 
      hideLoader(); 
      gallery.innerHTML = '';
    });
}); 