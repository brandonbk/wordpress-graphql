require('./env');
const wp = require('./wpapi');

const { log } = console;

const run = async () => {
  const res = await wp.posts();
  log(res);
};

run().catch(e => setImmediate((e) => {
  throw e;
}));
