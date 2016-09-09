import {createStore} from 'redux'
import React from 'react'  //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {reducers} from  './reducers'
import {routes} from './routes'
import {defaultState} from './reducers/defaultState'
import './styles/style.scss'

const store = createStore(reducers, defaultState, window.devToolsExtension && window.devToolsExtension())

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
)

