import {api} from '../api'

export const getBands = (dispatch) => {
    api('/bands/').then(resp => {
        dispatch({type: 'BANDS', bands: resp.data})
    })
}


export const addBand = (dispatch, data) => {
    api('/bands/', 'post', data).then(() => {
        getBands(dispatch)
    })
}
