import axios from 'axios'
import browserStore from 'store'

const backend = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 4000

})

export const api = (url, method='get', data={}) => {
    return backend({
        method,
        url,
        data,
        headers: {'Authorization': 'token ' + browserStore.get('token')}
    })
}
