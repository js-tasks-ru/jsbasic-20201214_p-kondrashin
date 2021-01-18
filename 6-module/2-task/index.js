import createElement from '../../assets/lib/create-element.js';

function makeLayout({name,image,price}) {

  return `
        <div class="card">
          <div class="card__top">
              <img src="/assets/images/products/${image}" class="card__image" alt="product">
              <span class="card__price">€${price.toFixed(2)}</span>
          </div>
          <div class="card__body">
              <div class="card__title">${name}</div>
              <button type="button" class="card__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
          </div>
        </div>`;
}

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.id = product.id;
    this.elem = createElement(makeLayout(this.product));
    this.button = this.elem.querySelector('.card__button');
    this.addEvent();
  }

  addEvent() {
    const elementId = this.id;
    this.button.addEventListener('click', function() {
      let event = new CustomEvent("product-add", {detail: elementId, bubbles: true});
      this.dispatchEvent(event);
    });
  }
}