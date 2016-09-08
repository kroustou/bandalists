import React from 'react'

const Login = ({login}) => (
    <form>
        <input onClick={login} className='button-primary' value='Login' type='button'/>
    </form>
)

export default Login
