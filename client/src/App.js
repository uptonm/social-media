import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Profile from './components/Profile';

class App extends Component {
  state = {};

  fetchAuth = async () => {
    // Make GET request to /api/current_user
    let auth = await axios.get('/api/current_user');
    auth = auth.data;
    // Set state.auth to false if logged-out, auth object if logged in
    if (auth.status === 'logged-out') {
      this.setState({ auth: false });
    } else {
      this.setState({ auth });
    }
  };

  componentDidMount = () => {
    this.fetchAuth();
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar auth={this.state.auth} />
          <Route exact path="/" component={Body} />
          {this.state.auth !== false ? (
            <Route
              path="/profile"
              component={() => <Profile profile={this.state.auth} />}
            />
          ) : (
            ''
          )}
        </div>
      </Router>
    );
  }
}

export default App;
