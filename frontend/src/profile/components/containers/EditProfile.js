import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderField from '../../../base/components/containers/RenderField'

const validate = values => {
    const errors = {}
    if (values.password || values.passwordVerify) {
        if (values.password !== values.passwordVerify) {
            errors.passwordVerify = 'Passwords do not match'
        }
    }
    return errors
}

const UserProfileForm = (props) => {
    const {submitSucceeded, user, handleSubmit, error, submitting} = props
    let buttonValue = 'Update'
    if (submitSucceeded) {
        buttonValue = 'Done! Update Again.'
    }
    if (submitting) {
        buttonValue = 'Updating...'
    }
    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <div className="error">{error}</div>
                <h5>Personal Info</h5>
                <div className="row">
                    <div className="columns six">
                        <Field  name="username" component={RenderField} type='text'  placeholder='Username'/>
                    </div>
                    <div className="columns six">
                        <Field  name="email" component={RenderField} type='email'  placeholder='email'/>
                    </div>
                </div>
                <div className="row">
                    <div className="columns six">
                        <Field  name="name" component={RenderField} type='text'  placeholder='Name'/>
                    </div>
                    <div className="columns six">
                        <Field  name="surname" component={RenderField} type='text'  placeholder='Surname'/>
                    </div>
                </div>
                <h5>Change password</h5>
                <div className="row">
                    <div className="columns six">
                        <Field  name="password" component={RenderField} type='password'  placeholder='New password'/>
                    </div>
                    <div className="columns six">
                        <Field  name="passwordVerify" component={RenderField} type='password'  placeholder='Verify New password'/>
                    </div>
                </div>
                <input className='button-primary' value={buttonValue} type='submit'/>
                <ul>
                    {user.instruments.length ? <li>{user.instruments}</li>: ''}
                </ul>
            </form>
        </div>
    )
}



export default reduxForm({
    form: 'editProfileForm',
    validate

})(UserProfileForm)
