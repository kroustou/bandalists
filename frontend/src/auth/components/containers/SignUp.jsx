import React from 'react'
import LoginForm from '.'

export default (props) => {
    return (
        <div>
            <h4>Welcome to bandalists! You are going to love it in here.</h4>
            <p>
                Please provide a username and password. We need to know its you the next time you come.
            </p>
            <LoginForm {...props}></LoginForm>
        </div>
    )
}


