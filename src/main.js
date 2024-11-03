import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.css';

const API_KEY = '46806668-35f52dba5a140225900df36e0';
const API_URL = 'https://pixabay.com/api/';

const searchForm = document.querySelector('.search-form'); 
const searchInput = searchForm.querySelector('input[name="search"]'); 
const gallery = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader-container'); 

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

      if (Array.isArray(images) && images.length > 0) {
        renderGallery(images, gallery);
      } else {
        console.warn('Немає зображень для цього запиту');
        iziToast.info({ title: 'Info', message: 'No images found for your search query.' });
        gallery.innerHTML = '';
      }
      hideLoader();
    })
    .catch(error => {
      console.error('Помилка при завантаженні зображень:', error);
      hideLoader();
      gallery.innerHTML = '';
    });
  });