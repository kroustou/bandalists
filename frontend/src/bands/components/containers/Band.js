import React from 'react'
import BandBlock from '../BandBlock'
import NewBand from '../NewBand'

export default ({bands}) => {
    return (
        <div className="bands">
            <div >
                <ul>
                { bands ? bands.results.map(band => (
                    <li key={band.id}>
                        <BandBlock band={band}/>
                    </li>
                    ))
                : 'Loading...'}
                </ul>
            </div>
            <div className="twelve columns">
                <NewBand/>
            </div>
        </div>
    )
}
