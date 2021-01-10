function hideSelf() {
  let button = document.querySelector('.hide-self-button');
  
  const hide = () => {button.hidden = true}

  button.addEventListener('click', hide);
}
