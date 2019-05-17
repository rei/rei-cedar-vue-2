// 1. start the dev server using production config
process.env.NODE_ENV = 'testing';
process.env.PORT = 9090;
const spawn = require('cross-spawn');
const http = require('http');
const handler = require('serve-handler');

console.log('runner.js');

const server = http.createServer((request, response) => {
  handler(request, response, {
    public: './public'
  });
});


server.listen(process.env.PORT, () => {
  console.log('listening on', process.env.PORT);
  
  console.log('setupNightwatch function');
  let opts = process.argv.slice(2);

  if (opts.indexOf('--config') === -1) {
    opts = opts.concat(['--config', 'test/e2e/nightwatch.conf.js']);
  }
  if (opts.indexOf('--env') === -1) {
    opts = opts.concat(['--env', 'chrome']);
  }

  console.log('creating runner, opts', opts);

  const runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' });

  runner.on('exit', (code) => {
    server.close();
    process.exit(code);
  });

  runner.on('error', (err) => {
    server.close();
    throw err;
  });
});
