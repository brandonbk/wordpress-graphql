const { isURL } = require('validator');
const {
  cleanEnv,
  makeValidator,
  port,
} = require('envalid');

const url = makeValidator((v) => {
  const opts = { protocols: ['http', 'https'], require_tld: false, require_protocol: true };
  if (isURL(v, opts)) return v;
  throw new Error('Expected a URL.');
});

const mongodsn = makeValidator((v) => {
  const opts = { protocols: ['mongodb'], require_tld: false, require_protocol: true };
  if (isURL(v, opts)) return v;
  throw new Error('Expected a Mongo DSN string startng with mongodb://');
});

const nonemptystr = makeValidator((v) => {
  const err = new Error('Expected a non-empty string');
  if (v === undefined || v === null || v === '') {
    throw err;
  }
  const trimmed = String(v).trim();
  if (!trimmed) throw err;
  return trimmed;
});

module.exports = cleanEnv(process.env, {
  PORT: port({ desc: 'The port that Express will listen on.', default: 5987 }),
  MONGO_DSN: mongodsn({ desc: 'The MongoDB DSN to connect to.' }),
  API_URI: url({ desc: 'The Wordpress API URI, e.g. http://www.your-site.com' }),
  API_USERNAME: nonemptystr({ desc: 'The Wordpress API username.' }),
  API_PASSWORD: nonemptystr({ desc: 'The Wordpress API password.' }),
});
