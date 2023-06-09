import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-top">

                    <Link to="/" className="header-logo">
                        <img src="/images/logo.png" alt="Logo" />
                        <span className="header-logo-text">LosStudy</span>
                    </Link>
                    

                    <div className="header-tel">
                        <a className="header-tel-icon" href="tel:+380982284569"><i className="fa-solid fa-phone"></i></a>
                        <span className="header-tel-text">+38 098 228 45 69</span>
                    </div>


                    <a href="#" className="header-lang">
                        <img src="/images/language.png" alt="Language" />
                        <div className="header-lang-text">
                            ukraine
                        </div>
                    </a>
                </div>

                <nav className="nav">
                    <Link to="/" className="nav-link">Main page</Link>
                </nav>

            </div> 
        </header>
    );
};

export default Header;