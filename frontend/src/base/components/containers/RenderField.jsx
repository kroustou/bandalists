import React from 'react'

export default ({input, placeholder, type, meta: {touched, error}}) => (
    <div className={ error ? 'has-error': ''}>
        <input className="u-full-width" {...input} placeholder={placeholder} type={type}/>
        {touched && error && <span className="error">{error}</span>}
    </div>
)
