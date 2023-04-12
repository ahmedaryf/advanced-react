import React, { useState } from 'react'

function ListTest() {
    const [test, setTest] = useState(0);
  return (
    <div>
    <h1>List test component</h1>
    <h2>{test}</h2>
        {test > 0 && <h2 style={{color: test > 5 && "green", backgroundColor: test > 10 && "yellow"}}>Hello World</h2>}
        <button onClick={() => setTest((prev) => prev + 1)}>Add</button>
        <button onClick={() => setTest((prev) => prev - 1)}>Sub</button>
    </div>
  )
}

export default ListTest