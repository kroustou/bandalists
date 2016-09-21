import {api} from '../api'
import {socket} from '../base/actions/index'
import browserStore from 'store'

export const getThreads = (dispatch, dashboardId) => {
    api('/threads/?dashboard=' + dashboardId).then(resp => {
        resp.data.dashboard = dashboardId
        dispatch({type: 'THREADS', data: resp.data})
    })
}

export const postThread = (data, dispatch) => {
    api('/threads/', 'post', data).then(resp => {
        getThreads(dispatch, data.dashboard)
        dispatch({type: 'THREAD_CHANGED', data: resp.data})
    })
}

export const updateDone = () => {
    return {type: 'UPDATE_DONE'}
}


export const deleteThread = (dispatch, thread) => {
    let dashboard = thread.dashboard
    api('/threads/' + thread.id + '/', 'delete').then(() => {
        getThreads(dispatch, dashboard)
        dispatch({type: 'THREAD_CHANGED'})
    })
}


