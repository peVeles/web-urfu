import css from './modal.module.css'
import { createPortal } from 'react-dom'

const Modal = () => {
  const body = document.getElementsByTagName('body')[0]

  // в случае если родительский контейнер компонента имеет css трансформацию, то она
  // будет нарушать позиционирование модального окна, поэтому выносим его из текущего
  // положения в дереве в <body> при помощи portals
  return createPortal(
    <div className={css.shadow}>
      <div className={css.modal}>{this.props.children}</div>
    </div>,
    body
  )
}

export default Modal
