import React, { Component } from "react";

class Header extends Component {
  renderAuth() {
    switch (this.props.auth) {
      case undefined:
        return <div>Loading...</div>;
      default:
        if (this.props.auth.status) {
          return (
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="/auth/google" className="nav-link">
                    Log In
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/auth/google" className="nav-link">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          );
        } else {
          return (
            <div>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle">{`${
                  this.props.auth.first
                } ${this.props.auth.last}`}</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/api/logout">
                    Log Out
                  </a>
                </div>
              </li>
            </div>
          );
        }
    }
  }
  render() {
    console.log(this.props.auth);
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
