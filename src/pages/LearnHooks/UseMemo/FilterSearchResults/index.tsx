import { useMemo, useState } from 'react'

interface ITodoItem {
  id: number
  text: string
}

const FilterSearchResults = () => {
  const [todoList, setTodoList] = useState<ITodoItem[]>([
    { id: 1, text: 'Выпить кофе' },
    { id: 2, text: 'Составить список задач на квартал' },
    { id: 3, text: 'Делигировать задачи на квартал' },
    { id: 4, text: 'Улететь в отпуск' },
  ])
  const [searchString, setSearchString] = useState('')

  const searchResults = useMemo(() => {
    if (!searchString) return todoList

    return todoList.filter((it) => it.text.includes(searchString))
  }, [todoList, searchString])

  const renderTodo = (item: ITodoItem, _: number) => {
    return (
      <li className="todoItem" key={item.id}>
        <p>{item.text}</p>
      </li>
    )
  }

  return (
    <div className="wrapper">
      <div className="todoWrapper">
        <h2 style={{ textAlign: 'center' }}>Мой Todo list с поиском:</h2>
        <input
          className="todoInput"
          placeholder="Поиск..."
          value={searchString}
          onChange={(ev) => setSearchString(ev.target.value)}
        />
        <ul className="todoListWrapper">{searchResults.map(renderTodo)}</ul>
      </div>
    </div>
  )
}

export default FilterSearchResults
