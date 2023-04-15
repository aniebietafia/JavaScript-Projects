function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Please check ${selection} selector, no such element exists`);
}

function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll(".img")];

  this.modal = getElement(".modal");
  this.imageName = getElement(".image-name");
  this.modalImg = getElement(".main-img");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");

  //   this.openModal = this.openModal.bind(this);
  this.container.addEventListener(
    "click",
    function (e) {
      if (e.target.classList.contains("img")) {
        this.openModal(e.target, this.list);
      }
      this.openModal();
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (selectedImage, list) {
  this.setMainImage(selectedImage);
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src="${
        image.src
      }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}" />`;
    })
    .join(" ");
  this.modal.classList.add("open");
};

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
