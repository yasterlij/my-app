'use client'

import { useEffect } from "react"

export default function Error({ error, rest })
{
  
    useEffect(() => {
        console.log("error is", error)
    }, [error])
    
    const retryRequestHandler = () => {
        rest()
    }
    return <div>
        <h2>Open ai is not working.try again!</h2>
        <button onClick={retryRequestHandler}>Retry Request</button>
    </div>
}