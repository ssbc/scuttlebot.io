## Votes on a message

```js
var pull = require('pull-stream')
pull(
  sbot.links({ dest: messageId, rel: 'vote' }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot links --dest {messageId} --rel vote --values
```

[Vote messages](/docs/message-types/vote.html) put the value and reason data in the link, so we'll get those attributes in the output of `links` without including the full message value.
That's why `values: true` is not set.

[&rarr; links API](/apis/scuttlebot/ssb.html#links-source)