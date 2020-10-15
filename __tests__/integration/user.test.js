const { createFakerUser } = require('../factory/user.factory');
const App = require('../../src/App');
const User = require('../../src/app/controller/user.controller');

describe('User', () => {
  it('should be test', async () => {
    const response = await App.inject({
      method: 'GET',
      url: '/user',
    });
    expect(response.statusCode).toBe(200);
  });
});
