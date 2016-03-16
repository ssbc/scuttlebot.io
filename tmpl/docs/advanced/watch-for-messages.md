## Watch for messages by all users

```js
var pull = require('pull-stream')
pull(
  sbot.createLogStream({ live: true }),
  pull.drain(function (msg) { ... })
)
```
```bash
sbot log --live
```

[&rarr; createLogStream API](/apis/scuttlebot/ssb.html#createlogstream-source)

## Watch for messages by a single user

```js
var pull = require('pull-stream')
pull(
  sbot.createUserStream({ id: userId, live: true }),
  pull.drain(function (msg) { ... })
)
```
```bash
sbot createUserStream --id {userId} --live
```

Notice that `pull.drain` is used instead of `pull.collect`, so that new messages are handled immediately.

[&rarr; createUserStream API](/apis/scuttlebot/ssb.html#createuserstream-source)