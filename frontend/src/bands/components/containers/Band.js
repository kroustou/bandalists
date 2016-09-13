import React from 'react'
import {Link} from 'react-router'
import BandBlock from './BandBlock'

export default ({bands, selectBand, selectedBand, children, deleteBand}) => {
    return (
        <div className="band">
            <Link activeClassName='active' to='/bands/add/'>+ New band</Link>
            {children}
            <div>
                {bands ? <h4> Edit your {bands.count} bands</h4>: ''}
                <ul>
                { bands ? bands.results.map(band => (
                    <BandBlock key={band.id} band={band} selectedBand={selectedBand} selectBand={selectBand} deleteBand={deleteBand}/>
                    ))
                : 'Loading...'}
                </ul>
            </div>
        </div>
    )
}
