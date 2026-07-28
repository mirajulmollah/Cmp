//====================================================Card.jsx

import { useState } from "react"



function Card(props) {
    const [count, setCount] = useState(0)
    function Increment() {
        setCount(count + 1)
    }
    return (
        <div className="card">
            <h2>{count}</h2>
            <button onClick={Increment}>Increment</button>
            <h1>{props.title}</h1>
            <p className="description">{props.description}</p>
        </div>
    )
}
export default Card

