import React from 'react'
import './Footer.css'
import Github from '../../image/github.png'
import Instagram from '../../image/instagram.png'
import Linkedin from '../../image/linkedin.png'
import Logo from '../../image/logo.png'

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
            </div>
            <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
        <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
        </div>
    </div>

);
  };


export default Footer