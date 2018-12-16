import React, { Component } from "react";

class Header extends Component {
  renderAuth() {
    switch (this.props.auth) {
      case undefined:
        return <div>Loading...</div>;
      case this.props.auth.status === "logged-out":
        return (
          <div>
            <li className="nav-item">
              <a href="/auth/log-in" className="nav-link">
                Log In
              </a>
            </li>
            <li className="nav-item">
              <a href="/auth/sign-up" className="nav-link">
                Sign Up
              </a>
            </li>
          </div>
        );
      default:
        return <div>{this.props.auth.first}</div>;
    }
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
          <a class="navbar-brand" href="/">
            social-media.git
          </a>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/feed">
                Feed
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/trending">
                Trending
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">{this.renderAuth()}</ul>
        </nav>
      </div>
    );
  }
}

export default Header;
