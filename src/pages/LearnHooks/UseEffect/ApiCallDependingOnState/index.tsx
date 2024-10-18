import { useEffect, useState } from 'react'

const ApiCallDependingOnState = () => {
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState(null)
  const [id, setId] = useState(1)

  useEffect(() => {
    setLoading(true)

    fetch('https://api.restful-api.dev/objects/' + id)
      .then((r) => r.json())
      .then((r) => setItem(r))
      .finally(() => setLoading(false))
  }, [id])

  const renderItem = () => {
    if (loading) {
      return <p>Загрузка...</p>
    }

    if (!item) {
      return <p>Не удалось найти устройство с указанным id :(</p>
    }

    return <p>{item.name}</p>
  }

  return (
    <div className="wrapper">
      <div className="idInputWrapper">
        <p>Введите id:</p>
        <input value={id} onChange={(ev) => setId(+ev.target.value)} />
      </div>
      <h2>Модель телефона полученная по введенному id:</h2>
      {renderItem()}
    </div>
  )
}

export default ApiCallDependingOnState
