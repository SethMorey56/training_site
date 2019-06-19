import React from 'react';

class Styling extends React.Component {

    render() {
        return (

            <div className="ui container">
            <div className="ui horizontal segments">
                <div className="ui segment">
                    <h1 className="ui header">Train With Me</h1>
                    <i id="icon-homepage-placement" className="angle right icon"></i>
                    <p>Personalized Workouts</p>
                    <i id="icon-homepage-placement" className="angle right icon"></i>
                    <p>Muscle Concentration</p>
                    <i id="icon-homepage-placement" className="angle right icon"></i>
                    <p>Weights</p>
                    <i id="icon-homepage-placement" className="angle right icon"></i>
                    <p>Macros Tracking</p>
                    <i id="icon-homepage-placement" className="angle right icon"></i>
                    <p>Train to your needs</p>
                </div>
                <div className="ui segment" id="homepage-border">
                    <img className="ui fluid image large" src="https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_960_720.jpg" alt="fitness chick"/>
                </div>
            </div>
            </div>
        )
    }
}

export default Styling;