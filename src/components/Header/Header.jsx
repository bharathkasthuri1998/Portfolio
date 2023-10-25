import React from 'react'
import Moon_logo from "../../assets/moon.svg"
import "./Header.scss"

const Header = () => {
    return (
        <div className='Main_header'>
            <nav class="">
                <div class="container navbar-container">
                    {/* <img src={Header_logo} alt="" /> */}
                    <div class="name-text" id="txt">
                        <b>B</b><b>H</b><b>A</b><b>R</b><b>A</b><b>T</b><b>H</b>
                    </div>
                    <div className='navbar-headings'>
                        <ul>
                            <li>Services</li>
                            <li>Portfolios</li>
                            <li>Experience</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='header-moon'>
                        <div className='header-moon-logo'>
                            <img src={Moon_logo} alt="" />
                            <div className='resume-btn txt__14__500'>
                                Resume
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header