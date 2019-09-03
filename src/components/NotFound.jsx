import React from 'react';

class NotFound extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui center aligned segment">
                    <h1>This Page Does Not Exist</h1>
                    <img class="ui fluid image" src="https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif" alt="not found gif"/>
                </div>
            </div>
        )
    }
}

export default NotFound;