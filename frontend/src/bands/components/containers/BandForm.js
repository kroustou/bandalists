import React from 'react'
import { Field, reduxForm } from 'redux-form'

const EditBandForm = () => {
    return (
        <form className="new-band-form" >
            <div>
                <label htmlFor="name">Name</label>
                <Field name="name" component='input' placeholder='The best band in the world'/>
            </div>
            <div>
                <label htmlFor="name">Members</label>
                <Field name="members" component='select' multiple placeholder='Serch by username or email'>
                    <option value="1">lala</option>
                </Field>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'editBand',
    fields: ['name', 'members'],
})(EditBandForm)
