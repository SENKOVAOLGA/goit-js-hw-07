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
gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
gallery.addEventListener("click", handlerClick);
function handlerClick(evt) {
    evt.preventDefault();
    const target = evt.target;
    if (target.classList.contains("gallery__image")) {
        const originalImgUrl = target.dataset.source;
        const modal = basicLightbox.create(`<img src="${originalImageUrl} width="800" height="600"`);
        modal.show();
    }
}
 