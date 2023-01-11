import { useState, useEffect } from "react"

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You have moved {count} spots</p>
            <button onClick={()=> setCount(count+1)}>
                Move 1 spots
            </button>

        </div>

    )
}