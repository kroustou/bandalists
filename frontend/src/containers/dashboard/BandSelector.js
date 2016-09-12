import React from 'react'
import {Link} from 'react-router'


export default ({bands, selectBand}) => {
    return (
        <div className="band-selector">
            <ul className="bandSelector">
                { bands ? bands.results.map(band => (
                    <li><Link to={`/dashboard/${band.id}/`}>{band.name}</Link></li>
                    ))
                : 'Loading...'}
                <li><a>Add New Band</a></li>
            </ul>
        </div>
    )
}
