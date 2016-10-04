import axios from 'axios'
import browserStore from 'store'

const backend = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 4000

})

export const api = (url, method='get', data={}) => {
    let token = browserStore.get('token')
    let headers =  {Accept: 'application/json'}
    if (token) {
        headers.Authorization = 'token ' + token
    }
    return backend({
        method,
        url,
        data,
        headers,
    })
}
