import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import profileImage from "../assets/elliot.jpg";

class Profile extends Component {
  state = {
    first: "",
    last: "",
    bio: "",
    friends: 17
  };
  fetchUser = async () => {
    let id = this.props.history.location.pathname.substring(9, 33);
    // If profile has no id slug, show user's profile
    if (id.length === 0) {
      if (this.props.profile !== undefined) {
        this.setState({
          first: this.props.profile.first,
          last: this.props.profile.last,
          bio: this.props.profile.bio,
          friends: this.props.profile.friends.length
        });
      }
    } else {
      const user = await axios.get(`http://localhost:8000/api/users/${id}`);
      if (user !== undefined) {
        this.setState({
          first: user.data.first,
          last: user.data.last,
          bio: user.data.bio,
          friends: user.data.friends.length
        });
      }
    }
  };
  componentDidMount() {
    this.fetchUser();
  }
  render() {
    return (
      <div align="center">
        <Card
          align="center"
          image={profileImage}
          header={`${this.state.first} ${this.state.last}`}
          meta="Friend"
          description={this.state.bio}
          extra={
            // eslint-disable-next-line
            <a>
              <Icon name="user" />
              {`${this.state.friends} Friends`}
            </a>
          }
        />
      </div>
    );
  }
}

export default withRouter(Profile);
