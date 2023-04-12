import React, {useReducer} from 'react';
import { formatCurreny } from './CurrencyFormatter';


function ReducerFunc(state, action) {
    if(action.type === "buy") return {money: state.money - 10}
    if(action.type === "sell") return {money: state.money + 10}
}

export function Reducer() {
    const initialState = {money: 100}
    const [state, dispatch] = useReducer(ReducerFunc, initialState)
  return (
    <div>
    <div>Reducer</div>
    <div>{formatCurreny(state.money)}</div>
    <button onClick={() => dispatch({type: "buy"})} >Buy</button>
    <button onClick={() => dispatch({type: "sell"})} >Sell</button>
    </div>
  )
}
