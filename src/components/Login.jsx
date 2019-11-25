import React from 'react';
import CreateClient from './CreateClient';
import LoginClient from './LoginClient';

class Login extends React.Component {
    render() {
        return (
            <div className="LoginComp">
                <CreateClient />
                <LoginClient />
            </div>
        )
    }
}

export default Login;