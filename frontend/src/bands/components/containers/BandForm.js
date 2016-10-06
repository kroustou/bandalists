import React from 'react'
import { Field, reduxForm } from 'redux-form'
import BandMembers from '../BandMembers'
import RenderField from '../../../base/components/containers/RenderField'

const EditBandForm = (props) => {
    const {handleSubmit, initialValues, band} = props
    return (
        <div>
            {initialValues ? '' : <h5>Add a new band</h5>}
            <form className="new-band-form row " onSubmit={handleSubmit} autoComplete="off">
                <Field type="text" name="name" {...props.fields.name} component={RenderField} label="Band name" placeholder='Name'/>
                <input type="submit" value={initialValues ? 'Update': 'Create'}/>
            </form>
            <div className="row">
                {band ? <BandMembers band={band}/>: ''}
            </div>
        </div>
    )
}


export default reduxForm({
    fields: ['name', 'id'],
})(EditBandForm)
