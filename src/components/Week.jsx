import React from 'react';
import DayWorkout from './DayWorkout';

class Week extends React.Component {
    render() {
        return (
            <div className="container ui">
                <div className="ui container" id="plans-container">
                    <h2 className="ui center aligned icon header" id="workout-heading">
                        This Week
                    </h2>
                </div>
                <div className="ui four stackable cards">
                    <DayWorkout/>
                    <DayWorkout/>
                    <DayWorkout/>
                    <DayWorkout/>
                    <DayWorkout/>
                    <DayWorkout/>
                </div>
            </div>
        )
    }
}

export default Week;