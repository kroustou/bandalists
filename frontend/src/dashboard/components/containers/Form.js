import React from 'react'
import { Field, reduxForm } from 'redux-form'

const PostForm = (props) => {
    const {handleSubmit, submitting, selectedBand, placeholder, values} = props

    return (
        <form className="post-form" onSubmit={handleSubmit} autoComplete="off">
            <Field disabled={submitting} className="u-full-width" name="text" component='textarea' onKeyDown={(e) => {
                if (e.keyCode === 13 && e.shiftKey == false) {
                    e.preventDefault()
                    handleSubmit(values)
                }}}  placeholder={placeholder ? placeholder : 'Good news everyone at ' + selectedBand.name + '!'}/>
        </form>
    )
}

export default reduxForm({
    fields: ['text', 'dashboard', 'parent'],
})(PostForm)
