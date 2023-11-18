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

function handleClick(event) {
  event.preventDefault();

  const target = event.target;
  if (target.classList.contains('gallery__image')) {
    const index = galleryItems.findIndex(item => item.original === target.dataset.source);

 instance = new SimpleLightbox('.gallery', {
  captionsData: 'alt',
  captionDelay: 250,
});

    instance.show();

    document.addEventListener('keydown', handleKeyPress);
  }
}

function handleKeyPress(event) {
  if (event.code === 'Escape' && instance) {
    instance.close();
    document.removeEventListener('keydown', handleKeyPress);
  }
}

listGallery.addEventListener('click', handleClick);



// const listGallery = document.querySelector('.gallery');
// let instance;

// function createListGallery(array) {
//   return array
//     .map(({ preview, description, original }) => 
//       `<li class="gallery__item">
//          <a class="gallery__link" href="large-image.jpg">
//            <img
//              class="gallery__image"
//              src="${preview}"
//              data-source="${original}"
//              alt="${description}"
//            />
//          </a>
//        </li>`
//     )
//     .join('');
// }

// listGallery.insertAdjacentHTML('beforeend', createListGallery(galleryItems));

// function handleClick(event) {
//   event.preventDefault();

//   const target = event.target;
//   if (target.classList.contains('gallery__image')) {
//     const largeImageUrl = target.dataset.source;

//     instance = new SimpleLightbox(`
//       <div class="modal">
//         <img src="${largeImageUrl}" alt="Large Image"/>
//       </div>
//     `);

//     instance.show();

//     document.addEventListener("keydown", handleKeyPress);
//   }
// }

// function handleKeyPress(event) {
//   if (event.code === "Escape" && instance) {
//     instance.close();
//     document.removeEventListener("keydown", handleKeyPress);
//   }
// }

// listGallery.addEventListener("click", handleClick);
