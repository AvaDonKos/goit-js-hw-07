import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const makeGalleryItem = ({ preview, original, description } = {}) => {
  return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`;
};

const galleryCards = galleryItems.map((el) => makeGalleryItem(el)).join('');

galleryEl.innerHTML = galleryCards;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
