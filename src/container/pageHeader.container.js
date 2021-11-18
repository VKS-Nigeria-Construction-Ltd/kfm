import React from 'react'
import MainNav from '../components/mainNav.component'

export function Pageheader({title}) {
    

    return (
        <div className="page-header">
            <MainNav />
            <h4 className="primary-head text-center mt-5 text-light text-uppercase">{title}</h4>
        </div>
    )
}
