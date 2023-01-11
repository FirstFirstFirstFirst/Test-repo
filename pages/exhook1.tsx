import { useState, useEffect } from "react"

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You have moved {count} spots</p>
            <button onClick={()=> setCount(count+1)}>
                Move forward 1 spot
            </button>
            <button onClick={()=> setCount(count-1)}>
                Move backward 1 spot
            </button>

        </div>

    )
}