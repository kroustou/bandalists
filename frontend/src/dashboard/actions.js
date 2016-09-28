import {api} from '../api'
import {reset} from 'redux-form'

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
    })
}


export const deleteThread = (dispatch, thread) => {
    api('/threads/' + thread.id + '/', 'delete')
}


