const graphql = require('./graphql');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.redirect('/graphql?query={ping}');
  });
  app.use('/graphql', graphql);
};
