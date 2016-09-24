import React from 'react'
import { Field, reduxForm } from 'redux-form'

const EditBandForm = (props) => {
    const {handleSubmit, initialValues} = props
    return (
        <div>
            {initialValues ? '' : <h5>Add a new band</h5>}
            <form className="new-band-form row " onSubmit={handleSubmit} autoComplete="off">
                <Field className="u-full-width" name="name" {...props.fields.name} component='input' placeholder='Name'/>
            </form>
        </div>
    )
}

export default reduxForm({
    fields: ['name', 'id'],
})(EditBandForm)
