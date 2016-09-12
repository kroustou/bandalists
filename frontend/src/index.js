import {createStore} from 'redux'
import React from 'react'  //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {reducers} from  './base/reducers'
import {routes} from './base/routes'
import './static/styles/style.scss'
import {init} from './base/actions'

const store = createStore(reducers, {}, window.devToolsExtension && window.devToolsExtension())

init(store.dispatch)
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
)

