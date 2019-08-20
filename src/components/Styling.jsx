import React from 'react';

class Styling extends React.Component {

    render() {
        return (

            <div className="ui container" id="plans-container">
                    <h2 class="ui center aligned icon header" id="workout-heading">
                        This Week
                    </h2>

                <div class="ui three stackable cards">
                    <div class="card">
                        <div class="image">
                            <img src="https://cdn.pixabay.com/photo/2019/06/02/17/01/camera-4246878_960_720.jpg" alt="workout"/>
                        </div>
                        <div class="content">
                            <p class="header">Workout 1</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src="https://cdn.pixabay.com/photo/2019/06/02/17/01/camera-4246878_960_720.jpg" alt="workout"/>
                        </div>
                        <div class="content">
                            <p class="header">Workout 2</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src="https://cdn.pixabay.com/photo/2019/06/02/17/01/camera-4246878_960_720.jpg" alt="workout"/>
                        </div>
                        <div class="content">
                            <p class="header">Workout 3</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="ui animated button violet inverted" tabindex="0">
                        <div class="visible content">Login</div>
                        <div class="hidden content">
                            <i class="right arrow icon"></i>
                        </div>
                    </div>
                </div>

                {/* <label>Name</label>
                <div class="ui transparent input massive" id="input-style">
                    <input type="text" placeholder="Search..."/>
                </div> */}

                <div class="ui form">
                    <div class="fields">

                        <div className="four wide field">
                            <div class="ui transparent input massive" id="input-style">
                                <input type="text" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="four wide field">
                            <div class="ui transparent input massive" id="input-style">
                                <input type="text" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="four wide field">
                            <div class="ui transparent input massive" id="input-style">
                                <input type="text" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="four wide field">
                            <div class="ui transparent input massive" id="input-style">
                                <input type="text" placeholder="Etc"/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Styling;