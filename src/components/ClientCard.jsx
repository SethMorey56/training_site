import React from "react";

class ClientCard extends React.Component {
  render(props) {
    console.log(this.props.user);
    return (
      <div className="card">
        <div className="image">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/11/32/beautiful-1869208_1280.jpg"
            alt="description"
          />
        </div>
        <div className="content">
          <div className="header">{this.props.user.name}</div>
          <div className="meta">
            <div>{this.props.user.phone}</div>
          </div>
          <div className="description">{this.props.user.company.bs}</div>
        </div>
        <div className="extra content">
          <span className="right floated">Joined 2018</span>
          <span>
            <i className="user icon"></i>
            Profile
          </span>
        </div>
      </div>
    );
  }
}

export default ClientCard;
