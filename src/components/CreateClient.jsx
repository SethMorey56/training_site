import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createClient } from '../redux/actions';

class CreateClient extends React.Component {

    renderInput = ({ input, label, divSizing}) => {
        return (
            <div className={divSizing}>
                <label>{label}</label>
                <input {...input} autoComplete="off"></input>
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.createClient(formValues)
        // console.log(formValues)
    }

    render() {
        return (
            <div className="ui container">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <div className="fields">
                        <Field name="email" component={this.renderInput} label="Email" divSizing="eight wide field"></Field>
                        <Field name="password" component={this.renderInput} label="Password" divSizing="eight wide field"></Field>
                    </div>
                    <button className="ui button inverted violet">Create</button>
                </form>
            </div>
        )
    }
}

const formWrapped = reduxForm({
    form: 'createClient'
})(CreateClient);

export default connect(null, { createClient})(formWrapped);