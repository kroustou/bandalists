import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderField from '../../../base/components/containers/RenderField'


const UserProfileForm = (props) => {
    const {user, handleSubmit, error} = props
    return (
        <form onSubmit={handleSubmit}>
            <h2>Who are you {user.username}?</h2>
            <div className="error">{error}</div>
            <div className="row">
                <div className="columns six">
                    <Field  name="username" component={RenderField} type='text'  placeholder='Username'/>
                </div>
                <div className="columns six">
                    <Field  name="name" component={RenderField} type='text'  placeholder='Name'/>
                </div>
            </div>
            <div className="row">
                <div className="columns six">
                    <Field  name="email" component={RenderField} type='email'  placeholder='email'/>
                </div>
                <div className="columns six">
                    <Field  name="surname" component={RenderField} type='text'  placeholder='Surname'/>
                </div>
            </div>
            <input className='button-primary' value='update' type='submit'/>
            <ul>
                {user.instruments.length ? <li>{user.instruments}</li>: ''}
                {user.avatar ? <li>{user.avatar}</li>: ''}
            </ul>
        </form>
    )
}



export default reduxForm({
    form: 'editProfileForm'
})(UserProfileForm)
