import React from "react";
import './Footer.css'


export default function Footer() {
    return(
        <div className="footer">
            <div className="Icons">
                <img src="Social.png" alt="footer"/>
            </div>
            <div className="links">
                <a href="#"><h5>Conditions for use</h5></a>
                <a href="#"><h5>Privacy and Policy</h5></a>
                <a href="#"><h5>Press Room</h5></a>
            </div>
            <div>
                <p>© 2023 MovieBox by Kharey  </p>
            </div>
        </div>
    )
}