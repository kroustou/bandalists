import React from 'react'
import {Link} from 'react-router'

export default ({bands, selectBand, selectedBand}) => {
    return (
        <div className="band-selector three columns">
            <div className='band-image'><img src={selectedBand ? 'http://placehold.it/100x100/?text=' + selectedBand.name[0] : 'http://placehold.it/100x100/ff0000/?text=?'}/></div>
            <ul>
                { bands && bands.results ? bands.results.map(band => (
                    <li className={ selectedBand && band.slug === selectedBand.slug ? 'active' : ''} key={band.slug} onClick={() => selectBand(band) }>{band.name}</li>
                    ))
                : 'No band selected!!!'}
                <li><Link activeClassName='active' to='/bands/'>Manage</Link></li>
            </ul>
        </div>
    )
}



