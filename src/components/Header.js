import React from 'react'
import './assets/css/styles.css'

function Header() {

    return (
        <div>
            {/* Start: Header */}
            <div className="header">
            <div className="header--container">
                {/* logo */}
                <a href="#">
                <div className="header--logo">
                    <div className="header--logo-img">
                    <img src="./assets/media/imgs/logo.png" alt="" />                        
                    </div>
                    <span className="header--logo-text">Rarible</span>
                </div>
                </a>
                {/* search box */}
                <div className="header--searchbox">
                <div className="search--icon">
                    <img src="./assets/icons/search-solid.svg" alt="" />
                </div>
                <form action="submit">
                    <input type="text" placeholder="Collection, item or user" />
                </form>
                </div>
                {/* Menu */}
                <div className="header--menu">
                <div className="header--menu-nav">
                    <div className="menu-nav-left">
                    <p><a href>Explore</a></p>
                    <p><a href>My profile</a></p>
                    <p><a href>Following</a></p>
                    <p><a href>Activity</a></p>
                    </div>
                    <div className="menu-nav-center" />
                    <div className="menu-nav-right">
                    <p><a href>How it works</a></p>
                    <p id="comunity"><a href>Comunity</a>
                        <img style={{width: '10px'}} src="./assets/icons/angle-down-solid.svg" alt="" />
                    </p><div className="comunity--submenu">
                        <div className="comunity--submenu-container">
                        <div className="comunity--submenu-content">
                            <p><a href>RARI Token</a></p>
                            <p><a href>Discusting</a></p>
                            <p><a href>Voting</a></p>
                            <p><a href>Suggest feature</a></p>
                            <p><a href>Rarible protocol</a></p>
                            <p><a href>Subcribes</a></p>
                            <div className="comunity--submenu-social">
                            <div className="comunity-submenu-social-container">
                                <a href><img src="./assets/icons/twitter.png" alt="" /> </a>
                                <a href><img src="./assets/icons/telegram.png" alt="" /> </a>
                                <a href><img src="./assets/icons/discord.png" alt="" /> </a>
                                <a href><img src="./assets/icons/instagram.png" alt="" /> </a>
                                <a href><img src="./assets/icons/youtube.png" alt="" /> </a>
                                <a href><img src="./assets/icons/medium.png" alt="" /> </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <p />
                    </div>
                </div>
                <div className="header--menu-btn">
                    <button>Create</button>
                    <button>Sign in</button>
                    <button>c</button>
                </div>
                </div>
            </div>
            </div>
{/* End: Header */}

        </div>
    )
}
export default Header;