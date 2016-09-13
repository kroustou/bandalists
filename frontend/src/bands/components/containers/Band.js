import React from 'react'
import {Link} from 'react-router'
import EditBand from '../EditBand'

export default ({bands, selectBand, selectedBand, children}) => {
    return (
        <div className="band">
            <Link activeClassName='active' to='/bands/add/'> New band</Link>
            {children}
            <div>
                {bands ? <h4> Edit your {bands.count} bands</h4>: ''}
                <ul>
                { bands ? bands.results.map(band => (
                        <li className={ selectedBand && band.slug === selectedBand.slug ? 'active' : ''} key={band.slug} >
                            <span className="name" onClick={() => selectBand(band) }>{band.name}</span>
                            <EditBand params={{bandSlug: band.slug}}/>
                        </li>
                    ))
                : 'Loading...'}
                </ul>
            </div>
        </div>
    )
}
