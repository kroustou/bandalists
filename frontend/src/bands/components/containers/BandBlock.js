import React from 'react'
import BandMembers from '../BandMembers'
import BandLabel from './BandLabel'
import {Link} from 'react-router'

export default ({band}) => (
      <div className='band-details row' key={band.slug} >
        <BandLabel band={band}/>
        <div className="u-pull-right">
            <Link to={`/bands/edit/${band.slug}/`}><input type="button" name="edit" value="Edit"/></Link>
        </div>
    </div>
)



