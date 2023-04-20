import React, { useReducer } from 'react'

const reducer = (state, action) => {
  if(action.type === "write") return ({...state, text: action.payload});
  if(action.type === "add") return ({...state, count: state.count + 1})
  if(action.type === "remove") return ({...state, count: state.count - 1})
}

export function UseReducerPr() {
  const [state, dispatch] = useReducer(reducer, {text: "", count: 0})
  return (
    <div>
      <h1>UseReducer Function</h1>
      <h2>{state.text}</h2>
      <input type='text' onChange={(event) => dispatch({type: "write", payload: event.target.value})} /> <br /><hr />
      <button onClick={()=> dispatch({type: "add"})}>Add</button>
      <button disabled={state.count <= 0} onClick={()=> dispatch({type: "remove"})}>Remove</button>
      <h3>Count: {state.count}</h3>
    </div>
  )
}
