import browserStore from 'store'

export const defaultState = {
    selectedBand: browserStore.get('selectedBand'),
    bands: {
        results: []
    }
}
