import React from 'react'
import EditBand from '../EditBand'

export default ({band, selectedBand, selectBand, deleteBand}) => (
      <li className={ selectedBand && band.slug === selectedBand.slug ? 'active' : ''} key={band.slug} onClick={() => {selectBand(band)}}>
        <span className="active-hide">{band.name}</span>
        <span className="active-show delete" onClick={() => {deleteBand(band)}}>X</span>
        <div className="active-show"><EditBand params={{bandSlug: band.slug}}/></div>
    </li>
)



