import React from 'react'
import BandMembers from '../BandMembers'
import {Link} from 'react-router'

export default ({band}) => (
      <div className='band-details row' key={band.slug} >
        <div className="six columns">{band.name}</div>
        <div className="six columns">
            <div className="u-pull-right">
                <Link to={`/bands/edit/${band.slug}/`}><input type="button" name="edit" value="Edit"/></Link>
            </div>
        </div>
    </div>
)



