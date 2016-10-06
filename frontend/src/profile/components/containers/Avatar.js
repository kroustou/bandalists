import React from 'react'

export default ({img}) => (
    <div className="avatar-container">
        { img ? <img src={img}/> : <i className="fa fa-user fa-2x" aria-hidden="true"></i>}
    </div>
)
