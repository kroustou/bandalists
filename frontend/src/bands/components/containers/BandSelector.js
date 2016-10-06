import React from 'react'

export default ({bands, selectBand, selectedBand}) => {
    let bandImage = 'http://placehold.it/100x100/ff0000/?text=?'
    if (selectedBand) {
        bandImage = selectedBand.bandimage_set.find(i => i.primary).avatar
        if (!bandImage) {
            bandImage = 'http://placehold.it/100x100/?text=' + selectedBand.name[0]
        }
    }
    return (
        <div className="band-selector">
            {selectedBand ? '' : <div className="message">Please select a band</div>}
            <div className='band-image'>
                <img src={bandImage}/>
            </div>
            <ul>
                { bands && bands.results ? bands.results.map(band => (
                    <li className={ selectedBand && band.slug === selectedBand.slug ? 'active' : ''} key={band.slug} onClick={() => selectBand(band) }>{band.name}</li>
                    ))
                : 'No band selected!!!'}
            </ul>
        </div>
    )
}



