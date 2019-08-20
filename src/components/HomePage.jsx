import React from 'react';
import LandingPhoto from './LandingPhoto';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="first-div">
            <LandingPhoto/>

            <div className="ui equal width center aligned padded grid">
                <div className="row" id="custom-grid">
                    <div className="column" id="custom-grid-column">
                    <img className="ui fluid image" src="https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_960_720.jpg" alt="replace later"/>
                    </div>
                    <div className="column" id="custom-grid-column">
                    <img className="ui fluid image" src="https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_960_720.jpg" alt="replace later"/>
                    </div>
                </div>
                <div className="row" id="homepage-text">
                    <div className="column">
                        <div className="ui list">
                            <h1>Inspire Confidence</h1>
                            <p>Its about more than just looking good</p>
                            <p>Its about feeling good too</p>
                            <h1>Train Confidently</h1>
                            <p>Welcome to my personal site</p>
                            <p>more than just a business</p>
                            <p>this is another idea</p>
                            <p>and another</p> 
                        </div>
                    </div>
                </div>
                <div className="row" id="homepage-text">
                    <div className="column">
                        <Link to="/training/login"><button class="ui inverted violet button fluid" id="train">Train With Me</button></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;