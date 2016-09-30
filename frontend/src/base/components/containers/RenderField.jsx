import React from 'react'

export default ({input, placeholder, type, meta: {touched, error}}) => (
    <div className={ error ? 'has-error': ''}>
        {touched && error && <span className="error">{error}</span>}
        <input className="u-full-width" {...input} placeholder={placeholder} type={type}/>
    </div>
)
