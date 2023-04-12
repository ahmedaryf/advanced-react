import React, { useEffect, useRef } from 'react'

function UseRefHook() {
    const formInput = useRef(null);
    const focusClick = () => {
        formInput.current.focus()
    }

    // useEffect(() => {
    //     focusClick()
    // },[])
  return (
    <div>
        <h2>useRefHook</h2>
        <input ref={formInput} type='text' />
        <button onClick={() => focusClick()}>Focus</button>
    </div>
  )
}

export default UseRefHook;