const env = require('./env');
const pkg = require('../package.json');
const app = require('./app');
const mongodb = require('./mongodb');

const { PORT } = env;

mongodb.connect().then((client) => {
  process.stdout.write(`💾 Successful MongoDB connection to ${client.s.url}\n`);
  app.listen(PORT, () => {
    process.stdout.write(`🌐 Express app '${pkg.name} v${pkg.version}' listening on port ${PORT}\n`);
  });
}).catch(e => setImmediate(() => {
  throw e;
}));
