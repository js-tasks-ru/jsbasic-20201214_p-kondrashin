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
    this.initbuttons();
    this.container = this.elem.querySelector('.ribbon__inner');
    this.items = this.elem.querySelectorAll('.ribbon__item');
    this.addevent();  
  }

  buttonOff(right,left) {
    let 
      scrollLeftWidth = 0,
      scrollRightWidth = 0;
      
    scrollLeftWidth = this.container.scrollLeft;
    scrollRightWidth = this.container.scrollWidth - scrollLeftWidth - this.container.clientWidth;
    
    if (scrollRightWidth == 0) {
      right.classList.remove('ribbon__arrow_visible');
    }

    if (scrollLeftWidth == 0 && scrollRightWidth > 0) {
      left.classList.remove('ribbon__arrow_visible');
    }
    
    if (scrollRightWidth > 0 && scrollLeftWidth > 0) {
      left.classList.add('ribbon__arrow_visible');
      right.classList.add('ribbon__arrow_visible');
    }
  }

  slideMenu(count) {
    this.container.scrollBy(count,0)
  }

  slideright() {
    let counter = 0;
    counter += 350;
    this.slideMenu(counter);
  }

  slideleft() {
    let counter = 0;
    counter -= 350;
    this.slideMenu(counter);
  }

  initbuttons() {
    const 
      rightButton = this.elem.querySelector('.ribbon__arrow_right'),
      leftButton = this.elem.querySelector('.ribbon__arrow_left');

    rightButton.addEventListener('click',(event) => {
      this.slideright();
      this.buttonOff(rightButton,leftButton);
    });
    
    leftButton.addEventListener('click',(event) => {
      this.slideleft();
      this.buttonOff(rightButton,leftButton);
    });
  }


  addevent() {
    let 
      items = this.items,
      events,
      elem = this.elem;

    items.forEach((elem) => {
      elem.addEventListener('click', function () {
        items.forEach(elem => elem.classList.remove('ribbon__item_active'));
        this.classList.add('ribbon__item_active');
        events = new CustomEvent("ribbon-select", {detail: this.dataset.id, bubbles: true});
        elem.dispatchEvent(events);
      })
    });

  }
 
}


