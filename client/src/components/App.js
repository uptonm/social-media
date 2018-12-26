import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Friends from "./Friends";

class App extends Component {
  state = {
    auth: {
      status: undefined
    }
  };
  componentDidMount() {
    this.fetchAuth();
  }
  fetchAuth = async () => {
    const auth = await axios.get("/api/current_user");
    if (auth.status) {
      this.setState({
        auth: {
          status: "logged-out"
        }
      });
    }
    this.setState({ auth: auth.data }, () => console.log(this.state.auth));
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header auth={this.state.auth} />
            <Friends friends={this.state.auth.friends} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
