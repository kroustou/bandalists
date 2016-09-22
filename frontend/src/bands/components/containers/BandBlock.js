import React from 'react'
import EditBand from '../EditBand'
import BandMembers from '../BandMembers'
import {Link} from 'react-router'

export default ({band}) => (
      <div className='band-details' key={band.slug} >
        <span>{band.name}</span>
        <div className="members">
            <BandMembers band={band}/>
        </div>
        <Link to={`/bands/edit/${band.slug}/`}><input type="button" name="edit" value={`Edit ${band.name}`}/></Link>

    </div>
)



