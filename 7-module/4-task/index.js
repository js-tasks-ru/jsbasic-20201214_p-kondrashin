function sliderTemplate(steps) {
  function createsteps(amount) {
    let steps = '';
    for(let i = 0; i < amount; i++) {
      steps+=`<span></span>`
    }
    return steps
  } 

  let div = document.createElement('div')
  div.innerHTML = `
    <div class="slider__thumb" style="left: 0%;">
      <span class="slider__value">3</span>
    </div>
    <div class="slider__progress" style="width: 0%;"></div>
    <div class="slider__steps">
      ${createsteps(steps)}
    </div>`
  div.classList.add('slider');
  return div
}

export default class StepSlider {
  constructor({steps, value = 0}) {
    this.steps = steps;
    this.value = value;
    this.elem = sliderTemplate(steps);
    this.thumb = this.elem.querySelector('.slider__thumb');
    this.changevalueslider(this.value);
    this.addEventListeners();
  }
 
  changevalueslider(value,valuePercents) {
    let 
      sliderValue = this.elem.querySelector('.slider__value'),
      sliderSteps = this.elem.querySelector('.slider__steps'),
      progress = this.elem.querySelector('.slider__progress');
      if(!valuePercents) valuePercents = value / (this.steps - 1) * 100;
    
    sliderValue.textContent = value;
     
    for(let elem of sliderSteps.children) {
      elem.classList.remove('slider__step-active');
    }

    sliderSteps.children[value].classList.add('slider__step-active');  
    this.thumb.style.left = `${valuePercents.toFixed(0)}%`;
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


  addEventListeners() {
    this.thumb.ondragstart = () => false;

    this.thumb.onpointerdown = this.onPointerDown;

    this.elem.onclick = this.onClick;
  }

  onClick = event => {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    this.changevalueslider(this.calculateValue(left));
    this.addevent(this.calculateValue(left));
  }

  onPointerDown = event => {
    event.preventDefault();

    this.elem.classList.add('slider_dragging');

    document.addEventListener('pointermove', this.onPointerMove);
    document.addEventListener('pointerup', this.onPointerUp);
  }

  onPointerMove = event => {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    this.changevalueslider(this.calculateValue(left),this.calculatePercent(left));
  }

  onPointerUp = event => {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    this.addevent(this.calculateValue(left));
    this.elem.classList.remove('slider_dragging');
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerUp);
  }
    

  addevent(value) {
    let event = new CustomEvent('slider-change', {detail: value, bubbles: true});
    this.elem.dispatchEvent(event);
  }

}
