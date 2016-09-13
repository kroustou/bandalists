import BandForm from './containers/BandForm'
import {connect} from 'react-redux'
import {reset} from 'redux-form'
import {addBand} from '../actions'

const mapStateToProps = () => {
    return {
        form: 'newBand'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            addBand(dispatch, data)
            dispatch(reset('newBand'))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandForm)
