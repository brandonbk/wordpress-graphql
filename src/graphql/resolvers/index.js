const deepAssign = require('deep-assign');

module.exports = deepAssign(
  {
    /**
     *
     */
    Query: {
      ping: () => 'pong',
    },
  },
);
