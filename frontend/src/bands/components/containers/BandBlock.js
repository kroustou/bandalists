import React from 'react'
import EditBand from '../EditBand'
import BandMembers from '../BandMembers'

export default ({band, selectedBand, selectBand, deleteBand}) => (
      <div className={`${ selectedBand && band.slug === selectedBand.slug ? 'active' : ''} band-edit`} key={band.slug} onClick={() => {selectBand(band)}}>
        <span className="edit-hide">{band.name}</span>
        {band.members.length === 1 ? <span className="edit-show delete" onClick={() => {deleteBand(band)}}>X</span>: ''}
        <div className="members">
            <div className="edit-show">
              <EditBand params={{bandSlug: band.slug}}/>
            </div>
            <BandMembers band={band}/>
        </div>
    </div>
)



