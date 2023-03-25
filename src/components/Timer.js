import React, {useState, useEffect, useRef} from 'react'

function Timer() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null);
    useEffect(() => {
         intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => clearInterval(intervalRef.current);
    },[])
  return (
    <div>
        <div>Timer: {timer}</div>
        <button onClick={() => clearInterval(intervalRef.current)}>Clear timer</button>
       
    </div>
  )
}

export default Timer