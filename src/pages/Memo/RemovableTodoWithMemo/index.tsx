import { memo, useCallback, useState } from 'react'

interface ITodoItem {
  id: number
  text: string
}

const initialTodos = [
  { id: 1, text: 'Выпить кофе' },
  { id: 2, text: 'Составить список задач на квартал' },
  { id: 3, text: 'Делигировать задачи на квартал' },
  { id: 4, text: 'Улететь в отпуск' },
]

const RemovableTodoWithMemoPage = () => {
  const [todoList, setTodoList] = useState<ITodoItem[]>(initialTodos)

  const handleCreateVacation = () => {
    setTodoList((prev) => [...prev, { id: prev[prev.length - 1].id + 1, text: 'Улететь в отпуск' }])
  }

  const handleRemoveTodo = useCallback((id: ITodoItem['id']) => {
    setTodoList((prev) => prev.filter((it) => it.id !== id))
  }, [])

  const renderTodo = (item: ITodoItem, _: number) => {
    return <TodoItem onRemove={handleRemoveTodo} item={item} key={item.id} />
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

interface ITodoItemProps {
  item: ITodoItem
  onRemove: (id: ITodoItem['id']) => void
}

const TodoItem = memo((props: ITodoItemProps) => {
  return (
    <li className="todoItem" key={props.item.id}>
      <p>{props.item.text}</p>
      <button onClick={() => props.onRemove(props.item.id)}>x</button>
    </li>
  )
})

export default RemovableTodoWithMemoPage
