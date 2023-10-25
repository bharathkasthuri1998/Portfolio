import React from 'react'
import "./Home.scss"
import LinkedIn_logo from "../../assets/linkedin.svg"
import Instagram_logo from "../../assets/Instagram.svg"
import B_logo from "../../assets/bold-letter-b.svg"


const index = () => {
  return (
    <div>
      <div className='container mt-5 banner__main'>
        <div className='row'>
          <div className='col-md-5 banner__span'>
            <span className='txt__14__500 txt__cinder-light'>  MY NAME IS </span>
            <h2 className='txt__44'>BALIJAPALLI <span>BHARATH</span></h2>
            <p className='txt__16 txt__cinder'>Boasting a background of over 2 years' experience within both enterprise-level corporations and dynamic startups, I am a creative front-end developer. My proficiency traverses JavaScript, Angular, and React, while my fervent enthusiasm for UI/UX underlines a true passion for my craft.</p>
            <div className='social_logos'>
              <a href="">
              <img src={Instagram_logo} alt="instagram" />
              </a>
              <a href="">
              <img src={LinkedIn_logo} alt="linkedin" />
              </a>
            </div>
          </div>
          <div className=' offset-md-3 col-md-4'>
          <div className='banner__img'>
          <div className='banner__img_2'>
          <img src={B_logo} alt="" />
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index