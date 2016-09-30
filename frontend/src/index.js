import {createStore, applyMiddleware, compose} from 'redux'
import React from 'react'  //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import {reducers} from  './base/reducers'
import {routes} from './base/routes'
import './static/styles/style.scss'


const middleware = routerMiddleware(browserHistory)
const store = createStore(
    reducers,
    compose(
        applyMiddleware(middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
)

