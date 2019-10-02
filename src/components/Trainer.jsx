import React from "react";
import Clients from "./Clients";

class Trainer extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div large>
          <img
            large
            className="ui large fluid image centered"
            src="https://cdn.pixabay.com/photo/2019/08/19/07/45/pets-4415649__480.jpg"
            alt="description"
          />
        </div>
        <div className="ui four statistics">
          <div className="statistic">
            <div className="value">11</div>
            <div className="label">Clients</div>
          </div>
          <div className="statistic">
            <div className="value">11</div>
            <div className="label">Clients</div>
          </div>
          <div className="statistic">
            <div className="value">11</div>
            <div className="label">Clients</div>
          </div>
          <div className="statistic">
            <div className="value">11</div>
            <div className="label">Clients</div>
          </div>
        </div>
        <div className="ui basic segment">
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
            placerat eleifend leo.
          </p>
        </div>
        <Clients />
      </div>
    );
  }
}

export default Trainer;
