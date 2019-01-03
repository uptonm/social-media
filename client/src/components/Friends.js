import React, { Component } from "react";
import axios from "axios";
import { Header, Card, Icon } from "semantic-ui-react";
import Avatar from "react-avatar";

const ProfileCard = ({ id, googleId, first, last, bio, friends }) => {
  return (
    <Card
      align="center"
      image={<Avatar googleId={googleId} />}
      header={
        <a href={`/profile/${id}`}>
          {first} {last}
        </a>
      }
      meta="Friend"
      description={bio}
      extra={
        <a href={`/profile/${id}/friends`}>
          <Icon name="user" />
          {`${friends} Friends`}
        </a>
      }
    />
  );
};
class Friends extends Component {
  state = {
    friends: []
  };
  fetchFriends = async () => {
    let id = "loading";
    if (this.props.match) {
      id = this.props.match.params.id;
    } else {
      if (this.props.profile) {
        id = this.props.profile._id;
      }
    }

    if (id === "loading") {
      return;
    }
    const friends = await axios.get(
      `http://localhost:8000/api/users/${id}/friends`
    );
    this.setState({ friends: friends.data });
  };
  componentDidMount = () => {
    this.fetchFriends();
  };
  renderFriendsCards = () => {
    switch (this.state.friends.length) {
      case 0: {
        return <div>No Friends!</div>;
      }
      default: {
        return this.state.friends.map(friend => {
          return (
            <ProfileCard
              key={friend._id}
              id={friend._id}
              first={friend.first}
              last={friend.last}
              googleId={friend.googleId}
              friends={friend.friends.length}
            />
          );
        });
      }
    }
  };
  render() {
    return (
      <div align="center">
        <Header size="huge">Friends List</Header>
        <div>{this.renderFriendsCards()}</div>
      </div>
    );
  }
}

export default Friends;
