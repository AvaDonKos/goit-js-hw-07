import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryItems.forEach((el) => {
  const { preview, original, description } = el;

  const galleryItem = `<div class="gallery__item">
      <a class="gallery__link" href="${preview}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
  galleryEl.insertAdjacentHTML('beforeend', galleryItem);
});

const handleOpenOriginal = (event) => {
  event.preventDefault();

  const { target } = event;

  if (target.nodeName !== 'IMG') {
    return;
  }

  basicLightbox.create(`<img src="${target.dataset.source}">`).show();
};

galleryEl.addEventListener('click', handleOpenOriginal);