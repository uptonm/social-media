import React, { Component } from 'react';
import axios from 'axios';
import { Segment, Statistic } from 'semantic-ui-react';
import paragraph from '../assets/paragraph.png';

class Body extends Component {
  state = { users: 0 };
  componentDidMount = async () => {
    const users = await axios.get('http://localhost:8000/api/users');
    this.setState({ users: users.data.length });
  };
  render() {
    return (
      <div className="half-width" align="center">
        <Segment.Group>
          <Segment vertical>
            <Statistic label="Total Users" value={this.state.users} />
          </Segment>
          <Segment vertical>
            <img src={paragraph} alt="paragraph" />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default Body;
