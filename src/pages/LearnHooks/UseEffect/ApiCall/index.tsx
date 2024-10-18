import { useEffect, useState } from 'react'

const ApiCallPage = () => {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    setLoading(true)

    fetch('https://api.restful-api.dev/objects')
      .then((r) => r.json())
      .then((r) => setItems(r))
      .finally(() => setLoading(false))
  }, [])

  const renderItems = () => {
    if (loading) {
      return <p>Загрузка...</p>
    }

    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    )
  }

  return (
    <div className="wrapper">
      <h2>Модели телефонов полученные по API:</h2>
      {renderItems()}
    </div>
  )
}

export default ApiCallPage
