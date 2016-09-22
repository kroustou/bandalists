import React from 'react'
import BandBlock from './BandBlock'
import NewBand from '../NewBand'
import BandSelector from '../BandSelector'

export default ({bands, selectedBand}) => {
    return (
        <div className="bands">

            <div className="twelve columns">
                <div className='six columns'>
                    <NewBand/>
                </div>
                { bands.count > 1 ?
                    <div className='six columns'>
                        <h5>Select Band</h5>
                        <BandSelector/>
                    </div> : ''
                }
            </div>
            <div >
                {bands ? <h4>Your {bands.count} bands</h4>: ''}
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
