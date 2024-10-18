import { useState } from 'react'

interface ITodoItem {
  id: number
  text: string
}

const RemovableTodosPage = () => {
  const [todoList, setTodoList] = useState<ITodoItem[]>([
    { id: 1, text: 'Выпить кофе' },
    { id: 2, text: 'Составить список задач на квартал' },
    { id: 3, text: 'Делигировать задачи на квартал' },
    { id: 4, text: 'Улететь в отпуск' },
  ])

  const handleRemoveTodo = (id: ITodoItem['id']) => {
    setTodoList((prev) => prev.filter((it) => it.id !== id))
  }

  const handleCreateVacation = () => {
    setTodoList((prev) => [...prev, { id: prev[prev.length - 1].id + 1, text: 'Улететь в отпуск' }])
  }

  const renderTodo = (item: ITodoItem, _: number) => {
    return (
      <li className="todoItem" key={item.id}>
        <p>{item.text}</p>
        <button onClick={() => handleRemoveTodo(item.id)}>x</button>
      </li>
    )
  }

  return (
    <div className="wrapper">
      <div className="todoWrapper">
        <h2 style={{ textAlign: 'center' }}>Мой Todo list:</h2>
        <ul className="todoListWrapper">{todoList.map(renderTodo)}</ul>
        <div className="todoCreateVacationWrapper">
          <button onClick={handleCreateVacation}>+ Отпуск</button>
        </div>
      </div>
    </div>
  )
}

export default RemovableTodosPage
