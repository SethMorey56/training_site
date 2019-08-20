import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signIn } from '../redux/actions';

class CreateAccount extends React.Component {

    onSubmit = (formValues) => {
        this.props.signIn(formValues);
    }

    renderInput = ({ input, divSizing, placeholder }) => {
        return (
            <div className={divSizing}>
                <input { ...input } autoComplete="off" placeholder={placeholder} />
            </div>
        )
    }

    render() {
        return (
            <div className="ui container">
                <h3>Register</h3>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="ui form">
                    <div className="fields">
                        <Field name="name" placeholder="Name" component={this.renderInput} divSizing="sixteen wide field" />
                    </div>
                    <div className="fields">
                        <Field name="email" placeholder="Email" component={this.renderInput} divSizing="eight wide field" />
                        <Field name="password" placeholder="Password" component={this.renderInput} divSizing="eight wide field" /> 
                    </div>
                    <div className="fields">
                        <Field name="age" placeholder="Age" component={this.renderInput} divSizing="eight wide field" />
                        <Field name="gender" placeholder="Gender" component={this.renderInput} divSizing="eight wide field" />
                    </div>
                    <button className="ui inverted violet button">Start</button>
                </div>
                </form>
            </div>
        )
    }
}

const formWrapped = reduxForm({
    form: 'signIn'
})(CreateAccount)

export default connect(null, { signIn })(formWrapped);