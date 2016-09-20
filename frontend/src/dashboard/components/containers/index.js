import React from 'react'
import BandBlock from '../../../bands/components/BandBlock'

export const Dashboard = ({children}) => {
    return (
        <div className='dashboard'>
            <div className="eight columns">
                {children}
            </div>
            <div className="four columns members">
                <BandBlock editing={false}/>
            </div>
        </div>
    )
}
