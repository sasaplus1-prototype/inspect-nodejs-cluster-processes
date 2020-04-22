# inspect-nodejs-cluster-processes

inspect node.js cluster processes

## How to test

Normal boot:

```console
$ node index.js
Master 49195 is running
worker 49196 started
worker 49197 started
```

Inspect boot:

```console
$ NODE_INSPECT=1 node index.js
Master 49202 is running
Debugger listening on ws://127.0.0.1:9230/4a369154-77ea-4bc0-9e60-3686550a5963
For help, see: https://nodejs.org/en/docs/inspector
worker 49203 started
Debugger listening on ws://127.0.0.1:9231/0516c570-7aed-4d45-8a2a-d3159ee8100f
For help, see: https://nodejs.org/en/docs/inspector
worker 49204 started
```

## License

The MIT license.
