import React from 'react'
import './assets/css/Style.css'
import logo from './assets/media/imgs/logo.png'
import searchIcon from './assets/icons/search-solid.svg'
import dropMenuIcon from './assets/icons/angle-down-solid.svg'
import twitterIcon from './assets/icons/twitter.png'
import instagramIcon from './assets/icons/instagram.png'
import youtubeIcon from './assets/icons/youtube.png'
import mediumIcon from './assets/icons/medium.png'
import discordIcon from './assets/icons/discord.png'
import telegramIcon from './assets/icons/telegram.png'
import darkIcon from './assets/icons/waning-moon.png'




function Header() {
    function comunityDrop() {
        
        var x = document.getElementById("comunity-dropmenu");
        if (x.className === "comunity--submenu") {
          x.className += " dropmenu";
        } else {
          x.className = "comunity--submenu";
        }
      }

    return (
            
        <div className="header">
            <div className="header--container">
                
                <a href="#">
                <div className="header--logo">
                    <div className="header--logo-img">
                    <img src={logo}/>                        
                    </div>
                    <span className="header--logo-text">Rarible</span>
                </div>
                </a>
                
                <div className="header--searchbox">
                <div className="search--icon">
                    <img src={searchIcon} />
                </div>
                <form action="submit">
                    <input type="text" placeholder="Collection, item or user" />
                </form>
                </div>
                
                <div className="header--menu">
                <div className="header--menu-nav">
                    <div className="menu-nav-left">
                    <p><a href="#">Explore</a></p>
                    <p><a href="#">My profile</a></p>
                    <p><a href="#">Following</a></p>
                    <p><a href="#">Activity</a></p>
                    </div>
                    <div className="menu-nav-center" />
                    <div className="menu-nav-right">
                    <p><a href="#">How it works</a></p>

                    <p id="comunity" onClick={comunityDrop}>
                        Community
                        <img style={{width: '7px'}} src={dropMenuIcon} />
                        
                    </p>
                    <div className="comunity--submenu" id="comunity-dropmenu">
                        <div className="comunity--submenu-container">
                        <div className="comunity--submenu-content">
                            <p><a href="#">RARI Token</a></p>
                            <p><a href="#">Discusting</a></p>
                            <p><a href="#">Voting</a></p>
                            <p><a href="#">Suggest feature</a></p>
                            <p><a href="#">Rarible protocol</a></p>
                            <p><a href="#">Subcribes</a></p>
                            <div className="comunity--submenu-social">
                            <div className="comunity-submenu-social-container">
                                <a href="#"><img src={twitterIcon} /> </a>
                                <a href="#"><img src={telegramIcon} /> </a>
                                <a href="#"><img src={discordIcon} /> </a>
                                <a href="#"><img src={instagramIcon} /> </a>
                                <a href="#"><img src={youtubeIcon} /> </a>
                                <a href="#"><img src={mediumIcon} /> </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <p />
                    </div>
                </div>
                <div className="header--menu-btn">
                    <button id="create-main" type="button" className="header--button__long">Create</button>
                    <button id="sign-in" type="button" className="header--button__long">Sign in</button>
                    <button id="dark-light" type="button" className="header--button__circle">
                        <img style={{width: '15px'}} src={darkIcon} />
                    </button>
                </div>
                </div>
            </div>
        </div>
            

    )
}




export default Header;