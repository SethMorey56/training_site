import React from 'react';

class DayWorkout extends React.Component {
    state = { workoutNumber: 1 }
    render() {
        return (
            <div class="card">
                <div class="image">
                    <img src="https://cdn.pixabay.com/photo/2019/06/02/17/01/camera-4246878_960_720.jpg" alt="workout"/>
                </div>
                <div class="content">
                    <p class="header">Workout {this.state.workoutNumber}</p>
                    <button className="ui right floated button violet">
                        Select
                    </button>
                </div>
            </div>
        )
    }
}

export default DayWorkout;