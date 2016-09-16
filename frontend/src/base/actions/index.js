import {getNotifications} from '../../notifications/actions'

export const createMessage = (dispatch, msg) => {
    dispatch({type: 'MESSAGE', message: msg})
    setTimeout(() => {
        dispatch({type: 'MESSAGE', message: undefined})
    }, 5000)
}


export const init = (dispatch) => {
    getNotifications(dispatch)
}
