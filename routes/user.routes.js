const actions = require('../controllers/user');

module.exports = app => {
  app.get('/api/users', actions.get);
  app.get('/api/users/:id', actions.getOne);
  app.post('/api/users', actions.post);
  app.put('/api/users/:id', actions.put);
  app.delete('/api/users/:id', actions.delete);
  // Friend Related API
  app.get('/api/users/:id/friends', actions.getFriends);
  app.put('/api/users/:id/friends', actions.addFriend);
  app.delete('/api/users/:id/friends', actions.removeFriend);
};
