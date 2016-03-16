# pull-timeout

Timeout pull streams.

If you have long running streams that depend on extermal resources, you might want abort the stream when timing out.

## Usage

`timeout(ms)`

## Example

```js
var pull = require("pull-stream");
var timeout = require("pull-timeout");

pull(
  pull.values([1,2,3,4,5,6,7,8,9,10]),
  pull.asyncMap( function (data, done) {
    setTimeout( function () {
      done(null, data);
    }, Math.round(Math.random()*4) == 0 ? 1500 : 100)
  }),
  timeout(1000),
  pull.Through( function (read) {
    return function next (end, cb) {
      read(end, function (end, data) {
        console.log(end, data);
        if (end && end !== true) return next(null, cb);
        cb(end, data);
      })
    }
  })(),
  pull.drain(function (){})
)
```

## install

With [npm](https://npmjs.org) do:

```
npm install pull-timeout
```

## license

MIT