import React from "react";

const Friends = ({ friends }) => {
  if (friends) {
    return friends.map(friend => {
      return (
        <li>
          <a href={`http://localhost:8000/api/users/${friend}`}>{friend}</a>
        </li>
      );
    });
  } else {
    return <div>Friends</div>;
  }
};

export default Friends;
