const WPAPI = require('wpapi');
const env = require('./env');

const { API_URI } = env;

module.exports = new WPAPI({
  endpoint: `${API_URI}/wp-json`,
});
