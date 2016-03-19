## Messages by type

Sometimes it's helpful to get all messages of a certain type.
For this, you can use 'messagesByType':

```js
var pull = require('pull-stream')
pull(
  sbot.messagesByType({ type: 'post' }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot logt --type post
```

The ordering in `messagesByType` will be the same as the ordering in `createLogStream`.

[&rarr; messagesByType API](/apis/scuttlebot/ssb.html#messagesbytype-source)