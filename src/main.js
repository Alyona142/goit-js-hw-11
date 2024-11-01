// Імпорт бібліотек
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '46806668-35f52dba5a140225900df36e0';
const API_URL = 'https://pixabay.com/api/';

const searchForm = document.querySelector('.search-form'); 
const searchInput = document.getElementById('search-input');
const gallery = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader-container'); 


const lightbox = new SimpleLightbox('.gallery a');


function showLoader() {
  loaderContainer.style.display = 'flex';
}

function hideLoader() {
  loaderContainer.style.display = 'none';
}

