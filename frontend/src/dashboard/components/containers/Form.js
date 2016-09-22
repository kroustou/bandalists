import React from 'react'
import { Field, reduxForm } from 'redux-form'

const PostForm = (props) => {
    const {handleSubmit, submitting, selectedBand} = props

    return (
        <form className="post-form" onSubmit={handleSubmit} autocomplete="off">
            <div>
                <div >
                   <Field disabled={submitting} className="u-full-width" name="text" component='input'  placeholder={'Good news everyone at ' + selectedBand.name + '!'}/>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    fields: ['text', 'dashboard', 'parent'],
})(PostForm)
