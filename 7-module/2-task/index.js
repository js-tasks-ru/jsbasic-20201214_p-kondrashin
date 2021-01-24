import createElement from '../../assets/lib/create-element.js';

function makeLayout () {
  return `
  <!--Корневой элемент Modal-->
  <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>

      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>
  </div>`
}

export default class Modal {
  constructor() {
    this.elem = createElement(makeLayout());
    this.buttonClose();
    this.escclose();
  }
  
  open() {
    document.body.append(this.elem)
    document.body.classList.add('is-modal-open');
  }

  close() {
    document.body.classList.remove('is-modal-open');
    let modal = document.querySelector('.modal');
    if(modal) modal.remove();
  }

  setTitle(ModalTitle) {
    let title = this.elem.querySelector('.modal__title');
    title.textContent = ModalTitle;
  }

  setBody(node) {
    let body = this.elem.querySelector('.modal__body');
    body.innerHTML = '';
    body.append(node);
  }

  buttonClose() {
    const buttonClose = this.elem.querySelector('.modal__close');
    buttonClose.addEventListener('click', this.close);
  }

  escclose() {
    document.addEventListener('keydown', (event) => {
      if(event.code != 'Escape') return
      this.close();
    })
  }
}
