import React from 'react'
import { Field, reduxForm } from 'redux-form'

const EditBandForm = (props) => {
    const {handleSubmit, submitting} = props
    if (props.params && props.bands) {
        let editBand = props.bands.filter(band => band.slug === props.params.bandSlug)
        if (editBand.length) {
            editBand = editBand[0]
        } else {
            editBand = false
        }
        console.log(editBand)
    }
    return (
        <form className="new-band-form row" onSubmit={handleSubmit} >
            <div className="eight columns">
                <Field className="u-full-width" name="name" component='input' placeholder='The best band in the world'/>
            </div>
            <div className="four columns">
                <input className="u-full-width" type="submit" value="Save" id="" />
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'editBand',
    fields: ['name'],
})(EditBandForm)
