import browserStore from 'store'


let userInfo = browserStore.get('info')
let bands = []
if (userInfo) {
    bands = userInfo.bands
}

export const defaultState = {
    bands: {
        results: bands,
        count: bands.length
    },
    memberSearch: []
}
