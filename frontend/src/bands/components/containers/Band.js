import React from 'react'
import {Link} from 'react-router'

export default ({bands, selectBand, selectedBand, children}) => {
    return (
        <div className="band">
            <Link activeClassName='active' to='/bands/add/'> New band</Link> | {selectedBand ? <Link activeClassName='active' to='/bands/edit/'>Edit {selectedBand.name}</Link> : ''}
            {children}
            <div>
                <h2>Your bands</h2>
                <ul>
                { bands ? bands.results.map(band => (
                    <li className={ selectedBand && band.slug === selectedBand.slug ? 'active' : ''} key={band.slug} onClick={() => selectBand(band) }>{band.name}</li>
                    ))
                : 'Loading...'}
                </ul>
            </div>
        </div>
    )
}
