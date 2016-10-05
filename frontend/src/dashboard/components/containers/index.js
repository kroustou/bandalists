import React from 'react'
import BandBlock from '../../../bands/components/BandBlock'
import BandSelector from '../../../bands/components/BandSelector'

export const Dashboard = ({band, children}) => {
    return (
        <div className='dashboard twelve columns'>
            <div className="eight columns">
                {children}
            </div>
            <div className="four columns">
                <BandSelector/>
                <BandBlock band={band}/>
            </div>
        </div>
    )
}
