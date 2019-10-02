import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createExercise } from '../redux/actions';

class NewExercise extends React.Component {
    renderError( {touched, error }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta, divSizing }) => {
        // console.log(input)
        // console.log(meta)
        return (
            <div className={divSizing}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        // console.log(formValues)
        this.props.createExercise(formValues)
    }

    render () {
        // console.log("render props:", this.props)

        return (
            <div className="ui container">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <div className="fields">
                    <Field name="name" component={this.renderInput} label="Name" divSizing="eight wide field"/>
                    <Field name="description" component={this.renderInput} label="Description" divSizing="eight wide field"/>
                </div>
                <div className="fields">
                    <Field name="example" component={this.renderInput} label="Example" divSizing="eight wide field"/>
                    <Field name="rep" component={this.renderInput} label="Rep" divSizing="four wide field"/>
                    <Field name="set" component={this.renderInput} label="Set" divSizing="four wide field"/>
                </div>
                <button className="ui button primary">Submit</button>
            </form>
            </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {}

    if (!formValues.name) {
        errors.name = "Don't forget Me"
    }
    if (!formValues.description) {
        errors.description = "Don't forget Me"
    }
    if (!formValues.example) {
        errors.example = "Don't forget Me"
    }
    if (!formValues.rep) {
        errors.rep = "Don't forget Me"
    }
    if (!formValues.set) {
        errors.set = "Don't forget Me"
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'exerciseCreate',
    validate
})(NewExercise);

export default connect(null, { createExercise })(formWrapped);