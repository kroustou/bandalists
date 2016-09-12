import {api} from '../api'

export const getThreads = (dispatch, dashboardId) => {
    api('/threads/?dashboard=' + dashboardId).then(resp => {
        dispatch({type: 'THREADS', data: resp.data})
    })
}

export const postThread = (data, dispatch) => {
    api('/threads/', 'post', data).then(resp => {
    	getThreads(dispatch, data.dashboard)
        dispatch({type: 'THREAD_SAVED', data: resp.data})
    })
}


export const getBands = (dispatch) => {
    api('/bands/').then(resp => {
        dispatch({type: 'BANDS', bands: resp.data})
    })
}
