import React from 'react'
import { Link } from 'react-router-dom'
import '../App.scss'
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import './Home.css'
import HomeCardsSection from './HomeCardsSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
