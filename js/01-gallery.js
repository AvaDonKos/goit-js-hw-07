import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const makeGalleryItem = ({ preview, original, description } = {}) => {
  return `<div class="gallery__item">
      <a class="gallery__link" href="${preview}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
};

const galleryCards = galleryItems.map((el) => makeGalleryItem(el)).join('');

galleryEl.innerHTML = galleryCards;

const handleOpenOriginal = (event) => {
  event.preventDefault();

  const { target } = event;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${target.dataset.source}">`,
    {
      onShow: (instance) => {
        document.addEventListener('keydown', onEscapeBtnPress);
      },

      onClose: (instance) => {
        document.removeEventListener('keydown', onEscapeBtnPress);
      },
    }
  );

  instance.show();

  function onEscapeBtnPress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
};

galleryEl.addEventListener('click', handleOpenOriginal);
