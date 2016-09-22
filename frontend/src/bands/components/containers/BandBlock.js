import React from 'react'
import EditBand from '../EditBand'
import BandMembers from '../BandMembers'
import {Link} from 'react-router'

export default ({band}) => (
      <div className='band-details columns' key={band.slug} >
        <div className="columns">{band.name}</div>
        <div className="columns">
            <BandMembers band={band}/>
            <Link to={`/bands/edit/${band.slug}/`}><input type="button" name="edit" value={`Edit ${band.name}`}/></Link>
        </div>
    </div>
)



