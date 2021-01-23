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
  }
  
  setTitle(ModalTitle) {
    this.title = ModalTitle;
  }

  setBody(node) {
    this.node = node;
  }
  
  open() {
    const div = document.createElement('div')
    div.innerHTML = makeLayout()
    document.body.append(div)
    document.body.classList.add('is-modal-open');

    let body = document.querySelector('.modal__body');
    body.innerHTML = '';
    body.append(this.node);

    let title = document.querySelector('.modal__title');
    title.textContent = this.title;

    function buttonClosed() {
      document.body.classList.remove('is-modal-open');
      let modal = document.querySelector('.modal');
      modal.remove()
    }

    function escClosed(event) {
      if(event.code != 'Escape') return
      buttonClosed();
    }

    const buttonClose = document.querySelector('.modal__close');
    buttonClose.addEventListener('click', buttonClosed);
    document.addEventListener('keydown', escClosed);

  }

  close() {
    buttonClosed();
  }


}
