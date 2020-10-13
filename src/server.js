const App = require('./index');

const start = async () => {
  try {
    await App.server.listen(3000);
  } catch (error) {
    App.server.log.error(error);
  }
};

start();
