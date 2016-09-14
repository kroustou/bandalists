import React from 'react'
import EditBand from '../EditBand'
import BandMembers from '../BandMembers'

export default ({band, selectedBand, selectBand, editing}) => (
      <div className={`${ editing ? 'editing' : ''} band-edit`} key={band.slug} onClick={() => {selectBand(band)}}>
        <span className="edit-hide">{band.name}</span>
        <div className="edit-show">
          <EditBand bandSlug={band.slug}/>
        </div>
        <div className="members">
            <BandMembers band={band}/>
        </div>
    </div>
)



