import React from 'react';
import training from '../src/apis/training';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class Auth extends React.Component {

    componentDidMount() {
        // need to finish this call via the component architcture only (aka no redux)
        training.post('/training', someData)
        console.log(someData)

        this.onAuthChange(this.auth.isSignedIn.get())
    }

    onSignInClick = () => {
        this.onSignIn();
    }

    onSignOutClick = () => {
        this.onSignOut();
    }

    // renderAuthMessage() {
    //     if (this.state.isSignedIn === null ) {
    //         return <div>IDK if we are signed in.</div>
    //     } else if (this.state.isSignedIn === true) {
    //         return <div>You are Signed In</div>
    //     } else {
    //         return <div>You are Not Signed In</div>
    //     }
    // }

    renderAuth() {
        if (this.props.isSignedIn === null ) {
            return null;
        } else if (this.state.isSignedIn === true) {
            return (
                <button>
                    <i className="football ball icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button>
                    <i className="football ball icon" />
                    Sign In
                </button>
            )
        }
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn === true) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    }

    render() {
        return (
            <div className="Auth">
                <div>Authorization</div>
                <div>{this.renderAuth}</div>
            </div>
        )
    }
}

mapStateToProps = (state) => {
    { issignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(Auth);