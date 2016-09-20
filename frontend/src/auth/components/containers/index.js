import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = ({handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <Field name="next" component='input' type='hidden'/>
        <Field className="u-full-width" name="username" component='input' type='text'  placeholder='Username'/>
        <Field className="u-full-width" name="password" component='input' type="password" placeholder='Password'/>
        <input className='button-primary' value='Login' type='submit'/>
    </form>
)

export default reduxForm({
    form: 'loginForm',
    fields: ['username', 'password', 'next']
})(LoginForm)
