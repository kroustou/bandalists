import React from 'react'

export default ({bands, selectBand}) => {
    return (
        <div className="band-selector">
            <ul className="bandSelector">
                { bands ? bands.results.map(band => (
                    <li>{band.name}</li>
                    ))
                : 'Loading...'}
                <li><a>Add New Band</a></li>
            </ul>
        </div>
    )
}
