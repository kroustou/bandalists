import BandForm from './containers/BandForm'
import {connect} from 'react-redux'
import {reset} from 'redux-form'
import {addBand} from '../actions'

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            addBand(dispatch, data)
            dispatch(reset('editBand'))
        }
    }
}

const NewBand = connect(mapStateToProps, mapDispatchToProps)(BandForm)
export default NewBand
