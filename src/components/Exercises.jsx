import React from 'react';
import { connect } from 'react-redux';
import { fetchExercises } from '../redux/actions';

class Exercises extends React.Component {
    componentDidMount() {
        this.props.fetchExercises()
    }

    renderList() {
        return this.props.exercises.map(exercise => {
            return (
                <div className="item" key={exercise.id}>
                    <div className="content">
                        {exercise.name}
                    </div>
                </div>
            )
        })
    }

    renderListProper() {
        return this.props.exercises.map(exercise => {
            return (
                    <div className="ui items">
                        <div className="item" key={exercise.id}>
                            <div className="ui small image">
                                <img src={exercise.example} alt="workout"/>
                            </div>

                            <div className="content">
                                <p className="header">{exercise.name}</p>

                            
                                <div className="description" id="semantic-ui-list-override">
                                    {exercise.set}
                                </div>

                                <div className="description" id="semantic-ui-list-override">
                                    {exercise.rep}
                                </div>

                                <div className="description" id="semantic-ui-list-override">
                                    {exercise.example}
                                </div>

                            <div className="extra">
                                {exercise.description}
                            </div>

                            </div>
                        </div>
                    </div>
            )
        })
    }

    render() {
        console.log(this.props.exercises)
        return (
            <div className="ui container">
                <div className="ui celled list">{this.renderListProper()}</div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { exercises: Object.values(state.exercises) }
}

export default connect(mapStateToProps, { fetchExercises })(Exercises);