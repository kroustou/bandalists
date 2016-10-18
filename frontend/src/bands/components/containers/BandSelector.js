import React from 'react'
import BandLabel from './BandLabel'

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



