const deepAssign = require('deep-assign');
const DateType = require('../types/date');

module.exports = deepAssign(
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
