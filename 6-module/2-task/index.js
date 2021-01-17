import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.render();
    this.id = product.id;
    this.addevent(this.elem);
  }
  render() {
    function makeTempplateElement({name, price, image} = {elem}) {
      return `<div class="card__top">
        <img src="/assets/images/products/${image}" class="card__image" alt="product">
        <span class="card__price">€${price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>`
    }

    const element = document.createElement('div');
    element.innerHTML = makeTempplateElement(this.product);
    element.classList.add('card');

    return element
  }

  addevent(element) {
    const elementId = this.id,
      button = element.querySelector('.card__button');
    button.addEventListener('click', newEvent);

    function newEvent() {
      let event = new CustomEvent("product-add", {detail: elementId, bubbles: true});
      button.dispatchEvent(event);
    }
  }
}