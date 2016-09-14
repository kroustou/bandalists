import {api} from '../api'

export const getThreads = (dispatch, dashboardId) => {
    // if no threads loaded or threads from another dashboard
    // load threads.
    api('/threads/?dashboard=' + dashboardId).then(resp => {
        resp.data.dashboard = dashboardId
        dispatch({type: 'THREADS', data: resp.data})
    })
}

export const postThread = (data, dispatch) => {
    api('/threads/', 'post', data).then(resp => {
        getThreads(dispatch, data.dashboard)
        dispatch({type: 'THREAD_SAVED', data: resp.data})
    })
}


export const deleteThread = (dispatch, thread) => {
    let dashboard = thread.dashboard
    api('/threads/' + thread.id + '/', 'delete').then(resp => {
        getThreads(dispatch, dashboard)
        dispatch({type: 'THREAD_DELETED'})
    })
}


