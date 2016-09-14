import {api} from '../api'

export const getBands = (dispatch) => {
    api('/bands/').then(resp => {
        dispatch({type: 'BANDS', bands: resp.data})
        dispatch({type: 'REFRESH_SELECTED_BAND'})
    })
}


export const addBand = (dispatch, data) => {
    api('/bands/', 'post', data).then((response) => {
        getBands(dispatch)
        dispatch(selectBand(response.data))
    })
}


export const editBand = (dispatch, data) => {
    let url = '/bands/' + data.slug + '/'
    api(url, 'put', data).then(() => {
        getBands(dispatch)
    })
}

export const selectBand = (band) => {
    return {'type': 'SELECT_BAND', 'band': band}
}


export const searchForUser = (dispatch, username) => {
    console.log(username)
}


export const leaveBand = (dispatch, bandSlug) => {
    let url = '/bands/' + bandSlug + '/leave/'
    api(url, 'delete').then(() => {
        getBands(dispatch)
    })
}
