import {api} from '../api'
import {createMessage} from '../base/actions'
import {getThreads} from '../dashboard/actions'

import browserStore from 'store'

export const SELECT_BAND = 'SELECT_BAND'

export const getBands = (dispatch) => {
    api('/bands/').then(resp => {
        dispatch({type: 'BANDS', bands: resp.data})
        dispatch({type: 'REFRESH_SELECTED_BAND'})
    })
}


export const addBand = (dispatch, data) => {
    api('/bands/', 'post', data).then((response) => {
        getBands(dispatch)
        selectBand(dispatch, response.data)
    })
}


export const editBand = (dispatch, data) => {
    let url = '/bands/' + data.slug + '/'
    api(url, 'put', data).then(() => {
        getBands(dispatch)
    })
}

export const selectBand = (dispatch, band) => {
    // this is bad.
    if (band.id) {
        getThreads(dispatch, band.id)
    } else {
        getThreads(dispatch, band)
    }
    dispatch({'type': SELECT_BAND, 'band': band})
}

export const searchForUser = (dispatch, username, bandSlug) => {
    dispatch({type: 'BAND_MEMBER_SEARCH', users: []})
    let url = '/user/' + username + '/?slug=' + bandSlug
    if (username.length) {
        api(url, 'get')
        .then(resp => {
            if (resp.status === 204) {
                dispatch({type: 'PROMPT_INVITE', user: username})
            } else if (resp.data.length) {
                dispatch({type: 'BAND_MEMBER_SEARCH', users: resp.data})
            }
        })
    }
}


export const leaveBand = (dispatch, bandSlug) => {
    let url = '/bands/' + bandSlug + '/leave/'
    browserStore.remove('lastSelectedBand')
    api(url, 'delete').then(() => {
        getBands(dispatch)
    })

}


export const addMember = (dispatch, bandSlug, userId) => {
    let url = '/bands/' + bandSlug + '/add/'
    dispatch({type: 'BAND_MEMBER_SEARCH', users: []})
    api(url, 'post', {id: userId}).then(() => {
        getBands(dispatch)
    })
}


export const invite = (dispatch, userEmail, bandSlug) => {
    let url = '/user/' + userEmail + '/invite/' + bandSlug + '/'
    api(url, 'post').then(() => {
        createMessage(dispatch, userEmail + ' has been invited!')
        dispatch({type: 'RESET_INVITED_USER'})
    })
}
