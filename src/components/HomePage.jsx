import React from 'react';
import LandingPhoto from './LandingPhoto';

const HomePage = () => {
    return (
        <div className="first-div">
            <LandingPhoto/>

            <div className="ui center aligned segment">
                <div class="ui vertical segment">
                    <h1 className="middle-text">Inspire Confidence | Train Confidently</h1>
                </div>
            </div>

            <div class="ui equal width center aligned padded grid">
                <div class="row" id="custom-grid">
                    <div class="column" id="custom-grid-column">
                    <img class="ui fluid image" src="https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_960_720.jpg" alt="replace later"/>
                    </div>
                    <div class="column" id="custom-grid-column">
                    <img class="ui fluid image" src="https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_960_720.jpg" alt="replace later"/>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="ui list">
                            <p class="item">This is another great point</p>
                            <p class="item">More points to be made</p>
                            <p class="item">IDK some kind of content</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;