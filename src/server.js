require('dotenv').config();
const App = require('./App');

App.server.listen(process.env.SERVER_PORT);
