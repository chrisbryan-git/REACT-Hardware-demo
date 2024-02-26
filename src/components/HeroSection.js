import React from 'react'
import '../App.css'
import './HeroSection.css'
import { Button} from './Button'

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>WELCOME TO KIBIKO HARDWARE</h1>
      <p>We value you!</p>
              
              <div className='hero-btn'>
        <Button className='btn' buttonStyle='btn--outline'
                      buttonSize='btn--large'>GET STARTED</Button>
              </div>
    </div>
  )
}

export default HeroSection
