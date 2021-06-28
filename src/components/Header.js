import React from 'react';
import "./styles/Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" alt=""/>
                </div>

                <span>Smart Jobs 👽</span>
            </div>
        </div>
    );
};

export default Header;
