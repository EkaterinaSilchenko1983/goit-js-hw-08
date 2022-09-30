// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

// Change code below this line

// console.log(SimpleLightbox);

// console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`,
  ''
);

galleryEl.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
