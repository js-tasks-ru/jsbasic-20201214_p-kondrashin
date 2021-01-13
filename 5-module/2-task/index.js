function toggleText() {
  const button = document.querySelector('.toggle-text-button'),
    text = document.querySelector('#text');

  function toggle() {
    if(!text.hidden) {
      text.hidden = true
    } 
    else {
      text.hidden = false
    }
  }

  button.addEventListener('click', toggle) 
}
