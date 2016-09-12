import React from 'react'

export default ({bands, selectBand, selectedBand}) => {
    return (
        <div className="band-selector three columns">
            <div className='band-image'><img src={selectedBand ? 'http://placehold.it/100x100/?text=' + selectedBand.name[0] : ''}/></div>
            <ul>
                { bands ? bands.results.map(band => (
                    <li className={ selectedBand && band.slug === selectedBand.slug ? 'active' : ''} key={band.slug} onClick={() => selectBand(band) }>{band.name}</li>
                    ))
                : 'Loading...'}
                {selectedBand ? <li><a>Edit {selectedBand.name}</a></li> : ''}
                <li><a>Add New Band</a></li>
            </ul>
        </div>
    )
}
