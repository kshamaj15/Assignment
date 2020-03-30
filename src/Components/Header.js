import React from 'react';
import logo from '../Assets/logo.png';
import more from '../Assets/more.png';

const Header = () => {
    return (
        <nav class="header">
            <div className="header-left">
                <a>
                    <img class="more" src={more} />
                </a>
                <a href="#default" class="logo">
                    <img src={logo} height="40px"/>
                </a>
                <a>Gurgaon</a>
            </div>
            <div class="header-right">
                <a class="active" href="#home">Accessories</a>
                <a href="#contact">Services</a>
                <a href="#about">offers</a>
                <a href="#about">More</a>
                <button>Login/Signup</button>
            </div>
        </nav>
    )
}

export default Header;