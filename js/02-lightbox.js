import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryItems.forEach((el) => {
  const { preview, original, description } = el;

  const galleryItem = `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
  `;

  galleryEl.insertAdjacentHTML('beforeend', galleryItem);
});

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
