const env = require('../env');
const Client = require('./client');

const { MONGO_DSN } = env;

module.exports = new Client(MONGO_DSN, { useNewUrlParser: true });
