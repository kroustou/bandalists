import {api} from '../api'
import {getNotifications} from '../notifications/actions'
import {reset} from 'redux-form'
import {push} from 'react-router-redux'


export const getThreads = (dispatch, dashboardId) => {
    dispatch({type: 'LOADING'})
    api('/threads/?dashboard=' + dashboardId).then(resp => {
        resp.data.dashboard = dashboardId
        dispatch({type: 'THREADS', data: resp.data})
        dispatch({type: 'DONE_LOADING'})
    })
}

export const postThread = (dispatch, data, formName) => {
    api('/threads/', 'post', data).then(() => {
        dispatch(reset(formName))
        getThreads(dispatch, data.dashboard)
        getNotifications(dispatch)
    })
}


export const deleteThread = (dispatch, thread) => {
    api('/threads/' + thread.id + '/', 'delete')
    if (!thread.parent) {
        dispatch(push('/dashboard/'))
    }

}


