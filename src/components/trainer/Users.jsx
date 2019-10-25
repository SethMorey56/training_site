import React from "react";
import ClientCard from "./ClientCard";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/actions";

class Users extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <ClientCard user={user} key={user.id} />;
    });
  }
  render() {
    return (
      <div className="ClientComp">
        <div className="ui stackable three column link cards">{this.renderUsers()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: Object.values(state.users) };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Users);
