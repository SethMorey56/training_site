import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    
    render() {
        return (
            <div className="ui container">
            <div id="header" className="ui secondary menu menu-custom">
                <Link to="/" className="item" id="custom-color">
                    Home
                </Link>
                <Link to="/training/about" className="item" id="custom-color">
                    About
                </Link>
                <Link to="/training/contact" className="item" id="custom-color">
                    Contact
                </Link>
                <Link to="/training/plans" className="item" id="custom-color">
                    Plans
                </Link>
                <div className="right menu">
                    <a href="https://www.twitter.com"><div id="twitter-icon-color" className="ui item"><i className="twitter icon"/>Bethanie Stephens</div></a>
                    <a href="https://www.instagram.com"><div id="instagram-icon-color" className="ui item"><i className="instagram icon"/>Bethanie Stephens</div></a>
                </div>
            </div>
            </div>
        )
    }

}

export default Header;