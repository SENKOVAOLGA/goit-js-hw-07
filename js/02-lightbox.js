import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");
  const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                  <a class="gallery__link" href="${original}">
                     <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
                  </a>
              </li>`
     })
      .join("");
gallery.insertAdjacentHTML('beforeend', galleryMarkup);
let lightBox = new simplelightBox('.gallery a', {
    captions: true,
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: "img",
    captionData: 'alt',
    captionPosition: 'bottom',
});