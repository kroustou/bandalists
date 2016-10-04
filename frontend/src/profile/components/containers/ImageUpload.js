import React from 'react'

export default (props) => (
    <div className="row">
        <div className="avatar six columns">
            <input id="upload" name="avatar" type="file" onChange={(e)=>props.handleChange(e)} />
            <div className="preview">
                <img src={props.avatarPreview ? props.avatarPreview : props.user.avatar }/>
                <label htmlFor="upload">Upload New</label>
            </div>
        </div>
    </div>
)

