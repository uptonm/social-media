import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import profileImage from '../assets/elliot.jpg';

class Profile extends Component {
  state = {
    first: 'Michael',
    last: 'Upton',
    friends: 17,
  };
  componentDidMount() {
    // Check if Loading
    if (this.props.profile !== undefined) {
      this.setState({
        first: this.props.profile.first,
        last: this.props.profile.last,
        friends: this.props.profile.friends.length,
      });
    }
  }
  render() {
    return (
      <Card
        align="center"
        image={profileImage}
        header={`${this.state.first} ${this.state.last}`}
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        extra={
          <a>
            <Icon name="user" />
            {`${this.state.friends} Friends`}
          </a>
        }
      />
    );
  }
}

export default Profile;
