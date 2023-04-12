import React, { useReducer} from 'react'

const ACTIONS = {
    ADD: "increment",
    SUBTRACT: "decrement",
    TEXT: "write"
}
const reducer = (state, action) => {
    if(action.type === ACTIONS.ADD) return ({...state, count: state.count + 1})
    if(action.type === ACTIONS.SUBTRACT) return ({...state, count: state.count - 1})
    if(action.type === ACTIONS.TEXT) return ({...state, input: action.payload})
}

function PracticeReducer() {
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, {count: 0, input: ""})

  return (
    <div>
        <h1>UseReducer Hook</h1>
        <input value={state.input} onChange={(e) => dispatch({type: ACTIONS.TEXT, payload: e.target.value})} type='text'/>
        <h4>{state.input}</h4>
        <h3>{state.count}</h3>
        <button onClick={() => dispatch({type: ACTIONS.ADD})}>Add</button>
        <button onClick={() => dispatch({type: ACTIONS.SUBTRACT})}>Subtraction</button>
    </div>
  )
}

export default PracticeReducer