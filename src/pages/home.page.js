import React from 'react'
import { AboutSection } from '../components/aboutSection.component'
import { HealthSection } from '../components/healthSection.component'
import { Mainsection } from '../components/mainSection.component'
import { HeaderContainer } from '../container/header.container'

export function HomePage(props) {
    

    return (
        <div>
        <HeaderContainer />
        <Mainsection />
        <AboutSection />
        <div className="extra_space"></div>
        <HealthSection />
      </div>
    )
}
