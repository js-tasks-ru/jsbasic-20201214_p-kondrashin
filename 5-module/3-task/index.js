function initCarousel() {
  let container = document.querySelector('.carousel__inner'),
    rightArrow = document.querySelector('.carousel__arrow_right'),
    leftArrow = document.querySelector('.carousel__arrow_left'),
    slides = document.querySelectorAll('.carousel__slide'),
    amountSlides = [...slides].length,
    containerWidth = 0;
   

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
