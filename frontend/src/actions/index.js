import {api} from '../constants'
import {getBands} from '../dashboard/actions'

export const init = (dispatch) => {
    getBands(dispatch)
}


