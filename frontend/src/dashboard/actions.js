import {api} from '../constants'

export const getThreads = (dispatch) => {
    api('/threads/').then(resp => {
        dispatch({type: 'THREADS', data: resp.data})
    })
}

export const postThread = (data, dispatch) => {
    api('/threads/', 'post', data).then(resp => {
        dispatch({type: 'THREADS', data: resp.data})
    })
}


export const getBands = (dispatch) => {
    api('/bands/').then(resp => {
        dispatch({type: 'BANDS', bands: resp.data})
    })
}
