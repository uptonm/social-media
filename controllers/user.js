const mongoose = require('mongoose');
const User = mongoose.model('users');

exports.get = async (req, res) => {
  const response = await User.find({});
  res.send(response);
};
exports.getOne = async (req, res) => {
  const response = await User.findById(req.params.id);
  res.send(response);
};
exports.post = async (req, res) => {
  const response = await new User(req.body).save();
  res.send(response);
};
exports.put = async (req, res) => {
  const response = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(response);
};
exports.delete = async (req, res) => {
  const response = await User.findByIdAndDelete(req.params.id);
  res.send(response);
};
// ! Friends Related API
exports.getFriends = async (req, res) => {
  const user = await User.findById(req.params.id);
  // Populate list of Friend ObjectId's with User Documents
  let friends = user.friends.map(async friend => {
    const response = await User.findById(friend);
    return response;
  });
  let response = await Promise.all(friends);
  res.send(response);
};
exports.addFriend = async (req, res) => {
  const user = await User.findById(req.params.id);
  let isFriend = user.friends.some(friend => {
    return friend.equals(req.body.id);
  });
  if (!isFriend) {
    const addA = await User.findByIdAndUpdate(req.params.id, {
      $push: { friends: req.body.id },
    });
    const addB = await User.findByIdAndUpdate(req.body.id, {
      $push: { friends: req.params.id },
    });
    return res.send('Friend Added');
  }
  return res.send('Already Friends');
};
exports.removeFriend = async (req, res) => {
  const user = await User.findById(req.params.id);
  let isFriend = user.friends.some(friend => {
    return friend.equals(req.body.id);
  });
  if (isFriend) {
    const remA = await User.findByIdAndUpdate(req.params.id, {
      $pull: { friends: req.body.id },
    });
    const remB = await User.findByIdAndUpdate(req.body.id, {
      $pull: { friends: req.params.id },
    });
    return res.send('Friend removed :(');
  }
  return res.send("Friend doesn't exist");
};
