import React from 'react'
import { Link } from 'react-router-dom'
import '../App.scss'
import './Home.css'
import HomeCardsSection from './HomeCardsSection'

import HomeHeroSection from './HomeHeroSection'



function Home() {
    return (
            <React.Fragment>    
  
                 <div className="section-break"/>
                <HomeHeroSection />
                <div className="section-break"/>
                <HomeCardsSection />
                <div className="section-break"/>
            </React.Fragment>
    )
}

export default Home
