## Links from one user to another

```js
var pull = require('pull-stream')
pull(
  sbot.links({ source: userId1, dest: userId2 }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot links --source {userId1} --dest {userId2}
```

[&rarr; links API](/apis/scuttlebot/ssb.html#links-source)