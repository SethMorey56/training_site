import React from 'react';

class ClientProfile extends React.Component {
    render() {
        return (
            <div className="ui container">
                <h3>Profile</h3>

                {/* <div class="ui two column grid" id="client-grid">
                    <div class="column" id="client-grid">
                        <div class="ui three column grid" id="client-grid">
                        <div class="column" id="client-grid"></div>
                        <div class="column" id="client-grid"></div>
                        <div class="column" id="client-grid"></div>
                        </div>
                    </div>
                    <div class="column" id="client-grid">
                        <div class="ui grid" id="client-grid">
                        <div class="ten wide column" id="client-grid"></div>
                        <div class="three wide column" id="client-grid"></div>
                        <div class="three wide column" id="client-grid"></div>
                        </div>
                    </div>
                </div> */}

                <div className="ui two column grid">
                    <div class="column">
                        <img class="ui large fluid rounded image" src="https://cdn.pixabay.com/photo/2013/10/02/23/03/dawn-190055__340.jpg"/>
                    </div>
                    <div class="column">
                        <div>Client Name</div>
                        <div>Client Age</div>
                        <div>Client Contact Information</div>
                    </div>
                </div>

                <div class="ui stackable four column grid center aligned">
                    <div class="column">stuff</div>
                    <div class="column"> and </div>
                    <div class="column">things</div>
                    <div class="column"> yes </div>
                </div>

                <div class="ui three item menu">
                    <h3 class="item">Progress Pics</h3>
                </div>

                <div class="ui stackable three column grid">
                    <div class="column">
                        <img class="ui medium fluid image" src="https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    </div>
                    <div class="column">
                        <img class="ui medium fluid image" src="https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    </div>
                    <div class="column">
                        <img class="ui medium fluid image" src="https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    </div>
                    <div class="column">
                        <img class="ui medium fluid image" src="https://images.unsplash.com/photo-1525550557089-27c1bfedd06c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientProfile;