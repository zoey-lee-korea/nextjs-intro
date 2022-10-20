import { useState } from "react"

export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Home Page</h1>
            <h1>number : {count}</h1>
            <button onClick={() => setCount((x)=>(x+1)) }>+</button>    
        </div>
    ) 
}