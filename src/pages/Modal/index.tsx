import css from './modal.module.css'
import { createPortal } from 'react-dom'
import { PropsWithChildren } from 'react'

const Modal = (props: PropsWithChildren) => {
  const body = document.getElementsByTagName('body')[0]

  // в случае если родительский контейнер компонента имеет css трансформацию, то она
  // будет нарушать позиционирование модального окна, поэтому выносим его из текущего
  // положения в дереве в <body> при помощи portals
  return createPortal(
    <div className={css.shadow}>
      <div className={css.modal}>{props.children}</div>
    </div>,
    body
  )
}

export default Modal
