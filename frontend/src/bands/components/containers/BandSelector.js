import React from 'react'

const BandLabel = ({band, selected}) => {
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

export default ({bands, selectBand, selectedBand}) => {

    return (
        <div className="band-selector">
            {selectedBand ? <BandLabel band={selectedBand} selected={true}/> : <div className="message">Please select a band</div>}
            <ul>
                { bands && bands.results ? bands.results.map(band => (
                    <li className={ selectedBand && band.slug === selectedBand.slug ? 'active' : ''} key={band.slug} onClick={() => selectBand(band) }><BandLabel band={band}/></li>
                    ))
                : 'No band selected!!!'}
            </ul>
        </div>
    )
}



