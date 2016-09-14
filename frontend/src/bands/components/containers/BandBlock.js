import React from 'react'
import EditBand from '../EditBand'
import BandMembers from '../BandMembers'

export default ({band, selectedBand, selectBand, editing}) => (
      <div className={`${ editing ? 'editing' : ''} band-edit`} key={band.slug} onClick={() => {selectBand(band)}}>
        <span className="edit-hide">{band.name}</span>
        <div className="members">
            <div className="edit-show">
              <EditBand params={{bandSlug: band.slug}}/>
            </div>
            <BandMembers band={band}/>
        </div>
    </div>
)



