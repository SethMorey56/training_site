import React from 'react';
import Axios from 'axios';
import training from './apis/training';

class Auth extends React.Component {
    state = { isSignedIn: null }

    componendDidMount() {
        training.get('client')
            .then(response => {
                console.log(response)
            })
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>No idea signed in status</div>
        } else if (this.state.isSignedIn === true) {
            return <div>Signed in</div>
        } else (this.state.isSignedIn === false) {
            return <div>Not signed in</div>
        }
    }

    render() {
        return (
            <div>
                <h2>Auth</h2>
                <div>{this.renderAuthButton()}</div>
            </div>
        )
    }
}

export default Auth;