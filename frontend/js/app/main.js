import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';

const counter = (state = 0, action) => {
    switch (action.type) {

        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state -1
        default:
            return state
    }
}

const Counter = ({ value, onIncrement, onDecrement }) => (
    <div className="">
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);


const store = createStore(counter)

const render = () => {
    ReactDOM.render(
        <Counter
         value={store.getState()}
         onDecrement={() => {
            store.dispatch({
                type: 'DECREMENT'
            })
         }}
         onIncrement={() => {
            store.dispatch({
                type: 'INCREMENT'
            })
         }}
        />,
        document.getElementById('app')
    )
}

store.subscribe(render)
render()


