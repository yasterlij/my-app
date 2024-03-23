'use client'
import { useState } from "react"


export default function Card({ title }) {
    const [count, setCount] = useState(1)
    const hadleClick = (event) => {
        event.preventDefault()
        setCount(count + 1)
    }
    if (!title) {return <div>Empty</div>}
    return <di>
        <h1 onClick={ hadleClick}> {title}</h1>
        {count}
    </di>
}