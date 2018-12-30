import React, { Component } from 'react';
import { Input, Icon, Menu, Loader } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.history.push(`/${name}`);
  };

  renderAuth = () => {
    const { activeItem } = this.state;
    switch (this.props.auth) {
      case undefined: {
        return (
          <Menu.Item>
            <Loader active size="mini" />
          </Menu.Item>
        );
      }
      case false: {
        return (
          <Menu.Item
            name="login or signup"
            href="/auth/google"
            active={activeItem === 'login or signup'}
            onClick={this.handleItemClick}
          >
            Login or Signup
          </Menu.Item>
        );
      }
      default: {
        return (
          <Menu.Menu>
            <Menu.Item
              name="profile"
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
            >
              <Icon name="user circle" />
              Profile
            </Menu.Item>
            <Menu.Item
              name="logout"
              href="/api/logout"
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        );
      }
    }
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary className="padded">
        <Menu.Item
          name=""
          active={activeItem === ''}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          name="messages"
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
        {this.renderAuth()}
      </Menu>
    );
  }
}

export default withRouter(Navbar);
