## Open an API client

If youre using Scuttlebot from a JS application, you will need to open a client connection.

> If you're using the command-line, you can <a href="./publish-a-message.html">skip this step.</a>

```js
var ssbClient = require('ssb-client')
ssbClient(function (err, sbot) {
  if (err)
    throw err

  // sbot is now ready. when done:
  sbot.close()
})
```

Currently, Scuttlebot's API client is only available for node.js applications.