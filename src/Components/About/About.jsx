import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mypic from '../../assets/mypic.svg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={mypic} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Frontend Developer with over. Throughout my carrer, I have had the privilege of collaborting with prestigiou organizations ,contributing to their success and growth.</p>
                <p>My passion for frontend development is not only but  also in the enthusiaism and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">HTML & CSS</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
