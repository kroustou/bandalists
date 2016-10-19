import React from 'react'
import BandBlock from '../../../bands/components/BandBlock'

export const Dashboard = ({band, children}) => {
    return (
        <div className='dashboard twelve columns'>
            <div className="eight columns">
                {children}
            </div>
            <div className="four columns">
                <BandBlock band={band}/>
            </div>
        </div>
    )
}
