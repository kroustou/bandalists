import axios from 'axios'
import browserStore from 'store'

const backend = axios.create({
    baseURL: 'http://api.bandalists.allochiria.com/',
    timeout: 4000
})

export const api = (url, method='get', data={}, config={}) => {
    let token = browserStore.get('token')
    let headers =  {Accept: 'application/json'}
    if (token) {
        headers.Authorization = 'token ' + token
    }

    return backend(Object.assign({
        method,
        url,
        data,
        headers,
    }, config))
}
