const fetch = require('node-fetch');

const url = 'https://content.cygnus.com/wp-json/wp/v2/posts';

const { log } = console;

const run = async () => {
  const res = await fetch(url);
  const data = await res.json();
  log(data);
};

run().catch(e => setImmediate(() => {
  throw e;
}));
