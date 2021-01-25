function createElement(spans) {
  let div = document.createElement('div')
  div.innerHTML = `
  <!--Корневой элемент слайдера-->
    <!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb" style="left: 0%;">
      <span class="slider__value">3</span>
    </div>
    <!--Заполненная часть слайдера-->
    <div class="slider__progress" style="width: 0%;"></div>
    <!--Шаги слайдера-->
    <div class="slider__steps">
      ${spans}
    </div>`
  div.classList.add('slider');
  return div
}

export default class StepSlider {
  constructor({steps, value = 0}) {
    this.steps = steps;
    this.value = value;
    this.elem = createElement(this.createsteps());
    this.changevalueslider(this.value);
    this.listenerclick();
    this.listenermove();
  }

  createsteps() {
    let steps = '';
    for(let i = 0; i < this.steps; i++) {
      steps+=`<span></span>`
    }
    return steps
  }
  
  changevalueslider(value,valuePercents) {
    let 
      sliderValue = this.elem.querySelector('.slider__value'),
      sliderSteps = this.elem.querySelector('.slider__steps'),
      thumb = this.elem.querySelector('.slider__thumb'),
      progress = this.elem.querySelector('.slider__progress');
      if(!valuePercents) valuePercents = value / (this.steps - 1) * 100;
    
    sliderValue.textContent = value;
     
    for(let elem of sliderSteps.children) {
      elem.classList.remove('slider__step-active');
    }

    sliderSteps.children[value].classList.add('slider__step-active');  
    thumb.style.left = `${valuePercents.toFixed(0)}%`;
    progress.style.width = `${valuePercents.toFixed(0)}%`;
  }

  calculateValue(left) {
    let 
      leftRelative = left / this.elem.offsetWidth,
      approximateValue = leftRelative * (this.steps - 1),
      value = Math.round(approximateValue);

    return value
  }

  calculatePercent(left) {
    let leftRelative = left / this.elem.offsetWidth;

    if (leftRelative < 0) {
      leftRelative = 0;
    }
      
    if (leftRelative > 1) {
      leftRelative = 1;
    }

    let leftPercents = leftRelative * 100;

    return leftPercents   
  }

  listenerclick() {

    this.elem.addEventListener('click', (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      this.changevalueslider(this.calculateValue(left));
      this.addevent(this.calculateValue(left));
    });
  }

  listenermove() {
    let 
      elem = this.elem,
      self = this, 
      thumb = this.elem.querySelector('.slider__thumb');

    thumb.onpointerdown = (event) => {
      event.preventDefault();

      document.addEventListener('pointermove', thumbMove);
      document.addEventListener('pointerup', thumbMoveOff);

      function thumbMove(event) {
        let left = event.clientX - elem.getBoundingClientRect().left;
        elem.classList.add('slider_dragging');
        self.changevalueslider(self.calculateValue(left),self.calculatePercent(left));
      }

      function thumbMoveOff() {
        elem.classList.remove('slider_dragging');
        document.removeEventListener('pointermove', thumbMove);
        document.removeEventListener('pointerup', thumbMoveOff);
      }
    }
  }
    

  addevent(value) {
    let event = new CustomEvent('slider-change', {detail: value, bubbles: true});
    this.elem.dispatchEvent(event);
  }

}
