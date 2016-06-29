import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const increment = () => ({
  type: 'INCREMENT'
})

const decrement = () => ({
  type: 'DECREMENT'
})

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() =>
        store.dispatch(increment())
      }
      onDecrement={() =>
        store.dispatch(decrement())
      }
    />,
    document.querySelector('#app')
  )
}

store.subscribe(render)
render()
