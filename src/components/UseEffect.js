import React, {useEffect, useState} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("Hello");

    useEffect(() => {
        console.log("you clicked", {count}, "times");
    });
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Add count</button>
        <br />
        <h1>{text}</h1>
        <button onClick={() => setText("Hello World")}>Add Text</button>
    </div>
  )
}

export default UseEffect;