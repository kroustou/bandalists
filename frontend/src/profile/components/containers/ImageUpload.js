import React from 'react'

export default (props) => {

    const url = props.band ? '/bands/' + props.band.slug + '/add_image/': '/me/'
    let preview
    if (props.avatarPreview) {
        preview = props.avatarPreview
    } else {
        if (props.band) {
            const primary = props.band.bandimage_set.find(i=>i.primary)
            if (primary) {
                preview = primary.image
            } else {
                preview = 'http://placehold.it/200x200'
            }
        } else {
            preview = props.user.avatar
        }
    }
    return (
        <div className="row">
            <div className="avatar three columns">
                <input id="upload" name="avatar" type="file" onChange={(e)=>props.handleChange(e, url)} />
                <div className="preview">
                    <div className="progress" style={{width: props.progress + '%'}}></div>
                    <img src={preview}/>
                    <label htmlFor="upload">Upload New</label>
                </div>
            </div>
        </div>
    )
}
