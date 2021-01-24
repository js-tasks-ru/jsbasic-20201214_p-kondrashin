import createElement from '../../assets/lib/create-element.js';

function makeLayout (data) {
  let layoutSlides = '';

  function makeLayoutSlide({name,price,id,image} = {elem}) {
    layoutSlides+=`<div class="carousel__slide" data-id="${id}">
                      <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
                      <div class="carousel__caption">
                        <span class="carousel__price">€${price.toFixed(2)}</span>
                        <div class="carousel__title">${name}</div>
                        <button type="button" class="carousel__button">
                          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                        </button>
                      </div>
                    </div>`
  }
  
  data.forEach(elem => makeLayoutSlide(elem))

  function makeLayoutElement(slides) {
    return `<div class="carousel">
              <div class="carousel__arrow carousel__arrow_right">
              <img src="/assets/images/icons/angle-icon.svg" alt="icon">
              </div>
              <div class="carousel__arrow carousel__arrow_left">
              <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
              </div>
              <div class="carousel__inner">
              ${slides}
              </div>
            </div>`
  }

  return makeLayoutElement(layoutSlides)
}

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = createElement(makeLayout(this.slides));
    this.elements = this.elem.querySelectorAll('.carousel__slide');
    this.initcarousel();
    this.addevent();
  }
  
  initcarousel() {
    const
      container = this.elem.querySelector('.carousel__inner'),
      rightArrow = this.elem.querySelector('.carousel__arrow_right'),
      leftArrow = this.elem.querySelector('.carousel__arrow_left'),
      amountSlides = [...this.elements].length;

    let containerWidth = 0;
     
    leftArrow.style.display = 'none';

    function arrowOff (width) {
      if (width == (- container.offsetWidth * (amountSlides-1))) {
          rightArrow.style.display = 'none';
      }
      else {
          rightArrow.style.display = '';
      }
  
      if (width == 0) {
          leftArrow.style.display = 'none';
      }
      else {
          leftArrow.style.display = '';
      }
    }
        
    function changeSlides (width) {
      return container.style.transform = `translateX(${width}px)`
    }
  
    function slideRight () {
      containerWidth -=container.offsetWidth;  
      arrowOff(containerWidth);
      changeSlides(containerWidth);
    }
  
    function slideLeft () {
      containerWidth +=container.offsetWidth;
      arrowOff(containerWidth);
      changeSlides(containerWidth);
    }
        
    rightArrow.addEventListener('click', slideRight);
    leftArrow.addEventListener('click', slideLeft);
  }

  addevent() {
    let slides = this.elements,
      events = '',
      item = this.elem;

    slides.forEach(elem => elem.addEventListener('click', function(event) {
      if(event.target.parentElement.tagName != 'BUTTON' && event.target.tagName != 'BUTTON') return
        events = new CustomEvent("product-add", {detail: this.dataset.id, bubbles: true});
        item.dispatchEvent(events);
    }))
  }


}
