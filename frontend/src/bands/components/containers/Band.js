import React from 'react'
import {Link} from 'react-router'
import BandBlock from './BandBlock'
import NewBand from '../NewBand'
import BandSelector from '../BandSelector'

export default ({bands, selectBand, selectedBand, children}) => {
    return (
        <div className="bands">

            <div>
                <h5>Select Band</h5>
                <BandSelector/>
            </div>
            <NewBand/>
            <div>
                {bands ? <h4> Edit your {bands.count} bands</h4>: ''}
                <ul>
                { bands ? bands.results.map(band => (
                    <li key={band.id}>
                        <BandBlock band={band} selectedBand={selectedBand} editing={selectedBand && band.slug === selectedBand.slug}/>
                    </li>
                    ))
                : 'Loading...'}
                </ul>
            </div>
        </div>
    )
}
