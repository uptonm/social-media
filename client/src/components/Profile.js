import React, { Component } from "react";
import { Card, Icon, Segment } from "semantic-ui-react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Avatar from "react-avatar";

class Profile extends Component {
  state = {
    first: "",
    last: "",
    bio: "",
    googleId: "",
    friends: 17
  };
  fetchUser = async () => {
    let id = "loading";
    if (this.props.match.params.id) {
      id = this.props.match.params.id;
    } else {
      if (this.props.profile) {
        id = this.props.profile._id;
      }
    }

    // Dont try to set data while data is loading
    if (id === "loading") {
      return;
    }

    // If profile has no id slug, show user's profile
    if (id.length === 0) {
      if (this.props.profile !== undefined) {
        this.setState({
          first: this.props.profile.first,
          last: this.props.profile.last,
          bio: this.props.profile.bio,
          googleId: this.props.profile.googleId,
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
          googleId: user.data.googleId,
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
        <Segment vertical>
          <Card
            align="center"
            image={<Avatar googleId={this.state.googleId} />}
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
        </Segment>
      </div>
    );
  }
}

export default withRouter(Profile);
