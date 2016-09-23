import React from 'react'
import { Field, reduxForm } from 'redux-form'


const RenderField = ({input, placeholder, type, meta: {touched, error}}) => (
    <div className={ error ? 'has-error': ''}>
        {touched && error && <span className="error">{error}</span>}
        <input className="u-full-width" {...input} placeholder={placeholder} type={type}/>
    </div>
)


const LoginForm = (props) => {
    const {handleSubmit, error} = props
    return (
        <form onSubmit={handleSubmit}>
           <div className="error">{error}</div>
            <Field name="next" component='input' type='hidden'/>
            <Field  name="username" component={RenderField} type='text'  placeholder='Username'/>
            <Field className="u-full-width" name="password" component={RenderField} type="password" placeholder='Password'/>
            <input className='button-primary' value='Login' type='submit'/>
        </form>
    )
}

export default reduxForm({
    form: 'loginForm',
    fields: ['username', 'password', 'next']
})(LoginForm)
