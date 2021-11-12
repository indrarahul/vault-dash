import React from 'react';
import './style.scss';

function Header() {
    return (<>
        <header className="header">
            <div className="header__container">
                <div className="header__nav">
                    <a href="/" className="header__text">Home</a>
                    <a href="/groups" className="header__text">Groups</a>
                    <a href="/entities" className="header__text">Entities</a>
                    <a href="/apps" className="header__text">Apps</a>
                </div>
            </div>

        </header></>
    )
}

export default Header;