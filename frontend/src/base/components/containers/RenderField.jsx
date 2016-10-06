import React from 'react'

export default ({input, label, placeholder, type, meta: {touched, error}}) => (
    <div className={`field ${ error ? 'has-error': ''}`}>
    	{ label ? <label htmlFor="">{label}</label>: ''}
        <input className="u-full-width" {...input} placeholder={placeholder} type={type}/>
        {touched && error && <span className="error">{error}</span>}
    </div>
)
