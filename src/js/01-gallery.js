// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.table(galleryItems);

const galleryList = document.querySelector('.gallery');
let markup = galleryItems

.map(({ preview, original, description}) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`;
})
  .join('');

galleryList.insertAdjacentHTML('beforeend', markup);

const gallery = new SimpleLightbox('.gallery a', {
  sourceAttr: 'href',
  captions: true,
  captionsData: 'alt',
  captionDelay: 250
});