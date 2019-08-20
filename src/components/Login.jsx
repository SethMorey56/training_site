import React from 'react';
import CreateAccount from './CreateAccount';

class Login extends React.Component {
    render () {
        return (
            <div className="LoginComp">
                <CreateAccount/>
            </div>
        )
    }
}

export default Login;