import React from 'react'
import { Field, reduxForm } from 'redux-form'

const PostForm = (props) => {
    const { handleSubmit, pristine, submitting, selectedBand} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                   <Field className="u-full-width" name="text" component='textarea' placeholder={'Good news everyone at' + selectedBand.name + '!'}/>
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'postForm',  // a unique identifier for this form
    fields: ['text', 'dashboard'],
})(PostForm)
