import { images } from './gallery-datas';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.getElementById('gallery');

const generatedLayout = images
  .map(({ preview, description, original }) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', generatedLayout);

const slider = new SimpleLightbox('ul.gallery a');