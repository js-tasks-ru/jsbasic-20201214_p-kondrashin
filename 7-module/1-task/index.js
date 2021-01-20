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

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = createElement(makeLayout(this.categories)); 
    this.initmenu();
  }

  initmenu() { 
    const 
      container = this.elem.querySelector('.ribbon__inner'),
      rightButton = this.elem.querySelector('.ribbon__arrow_right'),
      leftButton = this.elem.querySelector('.ribbon__arrow_left');

    let 
      counter = 0,
      scrollLeftWidth = 0,
      scrollRightWidth = 0;

    function buttonOff() {
      scrollLeftWidth = container.scrollLeft;
      scrollRightWidth = container.scrollWidth - scrollLeftWidth - container.clientWidth;

      if (scrollRightWidth > 0) {
        leftButton.classList.add('ribbon__arrow_visible');
      }
      else if (scrollRightWidth == 0) {
        rightButton.classList.remove('ribbon__arrow_visible');
      }

      if (scrollLeftWidth == 0) {
        leftButton.classList.remove('ribbon__arrow_visible');
        rightButton.classList.add('ribbon__arrow_visible');
      }
    }

    function scrollMenu (count) {
      buttonOff();
      container.scrollBy(count,0)
    }

    function scrollRight() {
      counter += 350;
      scrollMenu(counter);
      counter = 0;
    }

    function scrollleft() {
      counter -= 350;
      scrollMenu(counter);
      counter = 0;
    }
    
    rightButton.addEventListener('click', scrollRight);
    leftButton.addEventListener('click', scrollleft);
  }

}
