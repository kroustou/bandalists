import React from 'react'
import EditBand from '../EditBand'
import BandMembers from '../BandMembers'
import {Link} from 'react-router'

export default ({band}) => (
      <div className='band-details columns' key={band.slug} >
        <div className="row">
            {band.name}
            <div className="u-pull-right">
                <Link to={`/bands/edit/${band.slug}/`}><input type="button" name="edit" value="Edit"/></Link>
            </div>
        </div>
        <div className="row">
            <BandMembers band={band}/>
        </div>
    </div>
)



