## Messages by user

```js
var pull = require('pull-stream')
pull(
  sbot.createUserStream({ id: userId }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot createUserStream --id {userId}
```

The order of messages in an individual user's feed will be the same for all devices, and can be trusted.

[&rarr; createUserStream API](/apis/scuttlebot/ssb.html#createuserstream-source)