import React from 'react'

export default (props) => (
    <div className="avatar">
        <input className="fileInput" name="avatar" type="file" onChange={(e)=>props.handleChange(e)} />
        <div className="preview">
            <img src={props.avatarPreview ? props.avatarPreview : props.user.avatar }/>
        </div>
    </div>
)

