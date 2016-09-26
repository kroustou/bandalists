import {api} from '../api'
import {getNotifications} from '../notifications/actions'
export const getThreads = (dispatch, dashboardId) => {
    dispatch({type: 'LOADING'})
    api('/threads/?dashboard=' + dashboardId).then(resp => {
        resp.data.dashboard = dashboardId
        dispatch({type: 'THREADS', data: resp.data})
        dispatch({type: 'DONE_LOADING'})
    })
}

export const postThread = (data, dispatch) => {
    api('/threads/', 'post', data).then(() => {
        getThreads(dispatch, data.dashboard)
        getNotifications(dispatch)
    })
}


export const deleteThread = (dispatch, thread) => {
    api('/threads/' + thread.id + '/', 'delete')
}


