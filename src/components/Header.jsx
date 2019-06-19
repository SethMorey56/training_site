import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    
    render() {
        return (
            <div className="ui container">
            <div id="header" className="ui secondary menu menu-custom">
                <Link to="/training/homepage" className="item">
                    Home
                </Link>
                <Link to="/training/about" className="item">
                    About
                </Link>
                <Link to="/training/exercises" className="item">
                    Exercises
                </Link>
                <Link to="/training/newexercise" className="item">
                    New Exercise
                </Link>
                <Link to="/style" className="item">
                    Style
                </Link>
                <div className="right menu">
                    <div id="twitter-icon-color" className="ui item"><i className="twitter icon"/>@Bethany Stephens</div>
                </div>
            </div>
            </div>
        )
    }

}

export default Header;