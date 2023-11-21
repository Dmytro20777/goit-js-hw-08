// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);


const listGallery = document.querySelector('.gallery');
let instance;

function createListGallery(array) {
  return array
    .map(({ preview, description, original }) => 
      `<li class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             alt="${description}"
           />
         </a>
       </li>`
    )
    .join('');
}

listGallery.insertAdjacentHTML('beforeend', createListGallery(galleryItems));


const instance = new SimpleLightbox('.gallery__item a ', {
  captionsData: 'alt',
  captionDelay: 250,
});







