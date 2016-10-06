import React from 'react'

export default (props) => {

    const url = props.band ? '/bands/' + props.band.slug + '/add_image/': '/me/'
    let preview
    if (props.avatarPreview) {
        preview = props.avatarPreview
    } else {
        if (props.band) {
            preview = props.band.bandimage_set.find(i=>i.primary).image
        } else {
            preview = props.user.avatar
        }
    }

    return (
        <div className="row">
            <div className="avatar six columns">
                <input id="upload" name="avatar" type="file" onChange={(e)=>props.handleChange(e, url)} />
                <div className="preview">
                    <img src={preview}/>
                    <label htmlFor="upload">Upload New</label>
                </div>
            </div>
        </div>
    )
}
