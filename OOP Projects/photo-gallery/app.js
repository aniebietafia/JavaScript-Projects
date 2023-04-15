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
  this.modalImg = getElement(".main-img");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");

  this.openModal = this.openModal.bind(this);
  this.container.addEventListener("click", this.openModal);
}

Gallery.prototype.openModal = function () {
  console.log("open modal");
  this.modal.classList.add("open");
};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
