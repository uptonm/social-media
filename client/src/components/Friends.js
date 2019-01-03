import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Header } from "semantic-ui-react";

class Friends extends Component {
  fetchFriends = async () => {
    let id = this.props.history.location.pathname.substring(9, 33);
    // const friends = axios.get(`http://localhost:8000/api/users/${}`)
  };
  render() {
    return (
      <div>
        <Header>Friends Page</Header>
        <h2>{this.props.match.params.id}</h2>
      </div>
    );
  }
}

export default withRouter(Friends);
