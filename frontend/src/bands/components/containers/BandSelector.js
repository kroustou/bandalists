import React from 'react'
import {Link} from 'react-router'

export default ({bands, selectBand, selectedBand}) => {
    return (
        <div className="band-selector">
            {selectedBand ? '' : <div className="message">Please select a band</div>}
            <div className='band-image'><img src={selectedBand ? 'http://placehold.it/100x100/?text=' + selectedBand.name[0] : 'http://placehold.it/100x100/ff0000/?text=?'}/></div>
            <ul>
                { bands && bands.results ? bands.results.map(band => (
                    <li className={ selectedBand && band.slug === selectedBand.slug ? 'active' : ''} key={band.slug} onClick={() => selectBand(band) }>{band.name}</li>
                    ))
                : 'No band selected!!!'}
            </ul>
        </div>
    )
}



