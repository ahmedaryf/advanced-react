import React, { useReducer } from 'react'

const reducer = (state, action) => {
  if(action.type === "write") return ({...state,text: action.payload})
  if(action.type === "add") return ({...state,count: state.count + 10})


}

export function UseReducerPr() {
  const initialValue = {text: "", count: 0};
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>UserReducer function</h1>
      <h2>{state.text}</h2>
      <h2>{state.count}</h2>
      <input type='text' onChange={(e) => dispatch({type: "write", payload: e.currentTarget.value})}/>
      <button disabled={state.count >= 200} onClick={() =>  dispatch({type: "add"})}>Add</button>
    </div>
  )
}
