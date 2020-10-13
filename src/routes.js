// controllers
const User = require('./app/controller/user.controller');

module.exports = [
  {
    method: 'GET',
    url: '/',
    handler: User.index,
  },
];
