import LoginComponent from './components'
import SignUpComponent from './components/SignUp'
import reducer from './reducer'
import state from './defaultState'
import browserStore from 'store'

export const Login = LoginComponent
export const SignUp = SignUpComponent
export const authReducer = reducer
export const defaultState = state


export const requireAuth = (nextState, replace) => {
    if (!browserStore.get('token')) {
        replace({
            pathname: '/login/',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

export const redirectIfAuth = (nextState, replace) => {
    if (browserStore.get('token')) {
        replace({
            pathname: '/dashboard/',
        })
    }
}
