import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});

const galleryEl = document.querySelector('.gallery');

galleryItems.forEach((el) => {
  const { preview, original, description } = el;

  const galleryItem = `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  `;
  galleryEl.insertAdjacentHTML('beforeend', galleryItem);
});

const handleOpenGallery = (event) => {
  event.preventDefault();

  const { target } = event;

  if (target.nodeName !== 'IMG') {
    return;
  }
};

galleryEl.addEventListener('click', handleOpenGallery);
