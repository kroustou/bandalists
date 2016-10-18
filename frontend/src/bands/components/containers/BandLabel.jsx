import React from 'react'

export default ({band, selected}) => {
    let bandImage = 'http://placehold.it/100x100/?text=' + band.name[0]
    if (band.bandimage_set) {
        const bandImageDict = band.bandimage_set.find(i => i.primary)
        if (bandImageDict) {
            bandImage = bandImageDict.avatar
        }
    }
    return (
        <div className={`band-label ${selected ? 'selected' : ''}`}>
            <span>{band.name}</span>
            <div className='band-image'>
                <img src={bandImage}/>
            </div>
        </div>
    )
}
