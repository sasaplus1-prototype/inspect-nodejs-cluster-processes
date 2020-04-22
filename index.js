const cluster = require('cluster');
const http = require('http');

process.debugPort = 9229;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  cluster.fork();
  cluster.fork();

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  process.debugPort = 9229 + cluster.worker.id;

  if (process.env.NODE_INSPECT) {
    process.kill(process.pid, 'SIGUSR1');
  }

  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello!\n');
  }).listen(8000);

  console.log(`worker ${process.pid} started`);
}
