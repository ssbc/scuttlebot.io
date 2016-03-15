# ssb-client

Scuttlebot client. 

```js
var ssbClient = require('ssb-client')

// simplest usage, connect to localhost sbot
ssbClient(function (err, sbot) {
  // ...
})

// configuration:
var keys = ssbKeys.loadOrCreateSync('./app-private.key')
ssbClient(
  keys,                // optional, defaults to ~/.ssb/secret
  {
    host: 'localhost', // optional, defaults to localhost
    port: 8008,        // optional, defaults to 8008
    key: keys.id       // optional, defaults to keys.id
  },
  function (err, sbot) {
    // ...
  }
)

```

[View on Github](https://github.com/ssbc/ssb-client)
