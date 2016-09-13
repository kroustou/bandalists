import React from 'react'
import { Field, reduxForm } from 'redux-form'

const EditBandForm = (props) => {
    const {handleSubmit} = props
    return (
        <form className="new-band-form row " onSubmit={handleSubmit} >
            <Field className="u-full-width" name="name" {...props.fields.name} component='input' placeholder='Name'/>
        </form>
    )
}

export default reduxForm({
    fields: ['name', 'id'],
})(EditBandForm)
