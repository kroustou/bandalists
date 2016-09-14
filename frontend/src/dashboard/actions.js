import {api} from '../api'

export const getThreads = (dispatch, dashboardId, currentThreads) => {
    // if no threads loaded or threads from another dashboard
    // load threads.
    if (currentThreads) {
        if (currentThreads.count > 0) {
            if (currentThreads.results[0].dashboard === dashboardId) {
                return
            }
        }
    }
    api('/threads/?dashboard=' + dashboardId).then(resp => {
        if (resp.data.count) {
            dispatch({type: 'THREADS', data: resp.data})
        }
    })
}

export const postThread = (data, dispatch) => {
    api('/threads/', 'post', data).then(resp => {
        getThreads(dispatch, data.dashboard)
        dispatch({type: 'THREAD_SAVED', data: resp.data})
    })
}


