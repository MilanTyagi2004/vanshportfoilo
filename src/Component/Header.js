import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../Style/header.css';

function Header() {
    const [isopen, setopen] = useState(false);

    const togglemenu = () => {
        setopen(!isopen);
    };

    // Close menu when a link is clicked
    const handleLinkClick = () => {
        setopen(false);
    };

    return (
        <>
            <div id='Navbar'>
                <div id='nav-item-heading'>Vansh Tyagi</div>
                <div id='Nav-items'>
                    <a href="#about" onClick={handleLinkClick}>About</a>
                    <a href="#about" onClick={handleLinkClick}>Experience</a>
                    <a href="#project" onClick={handleLinkClick}>Project</a>
                    <a href="#contact" onClick={handleLinkClick}>Contact</a>
                </div>
            </div>
            {/* toggle nav */}
            <div id="hamburger-nav">
                <div id='heading'>Vansh Tyagi</div>
                <div className='hamburger-menu'>
                    <div className={`hamburger-icon ${isopen?'open':""}`} onClick={togglemenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${isopen ? 'open' : ''}`}>
                        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                        <li><a href="#about" onClick={handleLinkClick}>Experience</a></li>
                        <li><a href="#Project" onClick={handleLinkClick}>Project</a></li>
                        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
