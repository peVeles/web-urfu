import Modal from '../../Modal'
import { useState } from 'react'

interface IProps {
  onCreate: (newItemText: string) => void
  onClose: () => void
}

const CreateTodoModal = (props: IProps) => {
  const [newTodoText, setNewTodoText] = useState('')

  return (
    <Modal>
      <h2>Создание элемента</h2>
      <input value={newTodoText} placeholder="Текст.." onChange={(ev) => setNewTodoText(ev.target.value)} />
      <button onClick={() => props.onCreate(newTodoText)}>Сохранить</button>
      <button onClick={props.onClose}>Закрыть</button>
    </Modal>
  )
}

export default CreateTodoModal
