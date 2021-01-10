function toggleText() {
  let button = document.querySelector('.toggle-text-button'),
      text = document.querySelector('#text');

      function toggle() {
          if(text.hidden) {
            text.hidden = false
          } 
          else {
            text.hidden = true
          }
      }

  button.addEventListener('click', toggle) 
}
