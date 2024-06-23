import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import mypic from '../../assets/mypic.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={mypic} alt="" />
        <h1><span>I'm Swastik Sahoo,</span> Frontend developer based in INDIA.</h1>
        <p>I am a frontend developer from Odisha, India with 0 years of experience in multiple companies like Microsoft,Tesla and Apple. </p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
