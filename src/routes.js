// controllers
const User = require('./app/controller/user.controller');

module.exports = [
  {
    method: 'POST',
    url: '/user',
    handler: User.store,
  },
];
