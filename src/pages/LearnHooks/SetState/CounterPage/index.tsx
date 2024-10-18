import {useState} from "react";

const CounterPage = () => {
    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter((prev) => prev + 1)
    }

    const decreaseCounter = () => {
        setCounter((prev) => prev - 1)
    }

    return (
        <div className="wrapper">
            <div className="counterWrapper">
                <p>Счетчик:</p>
                <p>{counter}</p>
            </div>
            <div className="counterWrapper">
                <button onClick={increaseCounter}>+</button>
                <button onClick={decreaseCounter}>-</button>
            </div>
        </div>
    )
}

export default CounterPage