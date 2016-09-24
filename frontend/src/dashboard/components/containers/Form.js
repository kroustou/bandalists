import React from 'react'
import { Field, reduxForm } from 'redux-form'

const PostForm = (props) => {
    const {handleSubmit, submitting, selectedBand, placeholder} = props

    return (
        <form className="post-form" onSubmit={handleSubmit} autoComplete="off">
            <div>
                <div >
                   <Field disabled={submitting} className="u-full-width" name="text" component='textarea'  placeholder={placeholder ? placeholder : 'Good news everyone at ' + selectedBand.name + '!'}/>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    fields: ['text', 'dashboard', 'parent'],
})(PostForm)
