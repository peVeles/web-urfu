import CreateTodoModal from '../../../CreateTodoModal'
import { useState } from 'react'

interface IProps {
  onTodoItemCreated: (newTodoText: string) => void
}

const CreateTodoButton = (props: IProps) => {
  const [isCreateTodoModalOpen, setIsCreateTodoModalOpen] = useState(false)

  const handleCreated = (newTodoItemText: string) => {
    setIsCreateTodoModalOpen(false)
    props.onTodoItemCreated(newTodoItemText)
  }

  return (
    <>
      <button onClick={() => setIsCreateTodoModalOpen(true)}>+ Добавить</button>
      {isCreateTodoModalOpen && (
        <CreateTodoModal onCreate={handleCreated} onClose={() => setIsCreateTodoModalOpen(false)} />
      )}
    </>
  )
}

export default CreateTodoButton
