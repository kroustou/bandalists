import {api} from '../api'

export const getBands = (dispatch) => {
    api('/bands/').then(resp => {
        dispatch({type: 'BANDS', bands: resp.data})
        dispatch({type: 'REFRESH_SELECTED_BAND'})
    })
}


export const addBand = (dispatch, data) => {
    api('/bands/', 'post', data).then(() => {
        getBands(dispatch)
    })
}


export const editBand = (dispatch, data) => {
	let url = '/bands/' + data.slug + '/'
	api(url, 'put', data).then(() => {
        getBands(dispatch)
    })
}
