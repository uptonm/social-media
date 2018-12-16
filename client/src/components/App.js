import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

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
    this.setState({ auth: auth.data }, () => console.log(this.state.auth));
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header auth={this.state.auth} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
