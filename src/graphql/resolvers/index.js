const deepAssign = require('deep-assign');
const DateType = require('../types/date');

const post = require('./post');

module.exports = deepAssign(
  post,
  {
    /**
     *
     */
    Date: DateType,

    /**
     *
     */
    Query: {
      ping: () => 'pong',
    },
  },
);
