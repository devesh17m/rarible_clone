import React from 'react'
import './assets/css/Footer.css'
import dropMenuIcon from './assets/icons/angle-down-solid.svg'


function Footer() {

    return(
        <div className="footer">
            <div className="footer-container">
                <div className="footer--subcribe">
                    <h4>Get the lastest Rarible updates</h4>
                    <form action="submit">
                        <input type="text" placeholder="Your email"/>
                        <button>I'm in</button>
                    </form>
                </div>

                <div className="footer--extra-menu">
                    <h4>Rarible</h4>
                    <p><a href="">Explore</a></p>
                    <p><a href="">Help center</a></p>
                    <p><a href="">Blog</a></p>
                    <p><a href="">Job</a></p>
                    <p><a href="">Becomes a partner</a></p>
                    <p><a href="">Bug bouty</a></p>
                </div>

                <div className="footer--community">
                    <h4>Community</h4>
                    <p><a href="">RARI tokens</a></p>
                    <p><a href="">Discussion</a></p>
                    <p><a href="">Voting</a></p>
                    <p><a href="">Suggues feature</a></p>
                    <p><a href="">Rarible protocol</a></p>
                    <p><a href="">Subcribes</a></p>
                </div>

                <div className="footer--language">
                    <h4>Languages</h4>
                    <button>
                        <p>English</p> 
                        <img src={dropMenuIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Footer;