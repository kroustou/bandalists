import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'


const postReducer = (state = {}, action) => {
    return state
}

export const reducers = combineReducers({postReducer, routing: routerReducer})
