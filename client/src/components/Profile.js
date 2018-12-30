import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import profileImage from '../assets/elliot.jpg';

class Profile extends Component {
  state = {
    first: '',
    last: '',
    friends: 17,
  };
  fetchUser = async () => {
    const id = this.props.history.location.pathname.substring(9, 33);
    const user = await axios.get(`/api/users/${id}`);
    console.log(user.data);
  };
  componentDidMount() {
    // Check if Loading
    this.fetchUser();
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
          // eslint-disable-next-line
          <a>
            <Icon name="user" />
            {`${this.state.friends} Friends`}
          </a>
        }
      />
    );
  }
}

export default withRouter(Profile);
