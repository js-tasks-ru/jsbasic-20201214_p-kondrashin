import createElement from '../../assets/lib/create-element.js';

function makeLayout(data) {
  let layoutItems = '';

  function makeLayoutItems({name, id} = {elem}) {
    layoutItems+=`<a href="#" class="ribbon__item" data-id="${id}">${name}</a>`
  }

  data.forEach(elem => makeLayoutItems(elem));

  function makeLayoutElement(items) {
    return ` <div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner">
     ${items}
    </nav>
    <button class="ribbon__arrow ribbon__arrow_right  ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`
  }

  return makeLayoutElement(layoutItems)
}
// let menu = document.querySelector('.ribbon__inner').scrollBy(350, 0)

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = createElement(makeLayout(this.categories));
    this.container = this.elem.querySelector('.ribbon__inner');
    this.scroll()
  }

  scroll() {
    console.log(this.container);
    this.container.scrollBy(700,0); // Почему это метод не отрабатывает?
  }
}
