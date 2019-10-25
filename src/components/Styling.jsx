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

                <div class="ui middle aligned divided list">
                    <div class="item">
                        <div class="right floated content">
                        <div class="ui button">Add</div>
                        </div>
                        <img class="ui avatar image" src="https://cdn.pixabay.com/photo/2015/09/02/12/58/woman-918788__480.jpg"/>
                        <div class="content">
                        Lena
                        </div>
                    </div>
                    <div class="item">
                        <div class="right floated content">
                        <div class="ui button">Add</div>
                        </div>
                        <img class="ui avatar image" src="https://cdn.pixabay.com/photo/2015/09/02/12/58/woman-918788__480.jpg"/>
                        <div class="content">
                        Lindsay
                        </div>
                    </div>
                    <div class="item">
                        <div class="right floated content">
                        <div class="ui button">Add</div>
                        </div>
                        <img class="ui avatar image" src="https://cdn.pixabay.com/photo/2015/09/02/12/58/woman-918788__480.jpg"/>
                        <div class="content">
                        Mark
                        </div>
                    </div>
                    <div class="item">
                        <div class="right floated content">
                        <div class="ui button">Add</div>
                        </div>
                        <img class="ui avatar image" src="https://cdn.pixabay.com/photo/2015/09/02/12/58/woman-918788__480.jpg"/>
                        <div class="content">
                        Molly
                        </div>
                    </div>
                </div>

                <table class="ui five column table">
                    <thead>
                        <tr><th>Name</th>
                        <th>Status</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Notes</th>
                    </tr></thead>
                    <tbody>
                        <tr>
                        <td>John</td>
                        <td>Approved</td>
                        <td>22</td>
                        <td>Male</td>
                        <td>None</td>
                        </tr>
                        <tr>
                        <td>Jamie</td>
                        <td>Approved</td>
                        <td>32</td>
                        <td>Male</td>
                        <td>Requires call</td>
                        </tr>
                        <tr>
                        <td>Jill</td>
                        <td>Denied</td>
                        <td>22</td>
                        <td>Female</td>
                        <td>None</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr><th>3 People</th>
                        <th>2 Approved</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr></tfoot>
                </table>

            </div>
        )
    }
}

export default Styling;