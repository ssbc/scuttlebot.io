## Messages ordered by timestamp

```js
var pull = require('pull-stream')
pull(
  sbot.createFeedStream({ reverse: true }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot feed --reverse
```

**Important note:** message timestamps are set by the wall clock of the publisher, and may be incorrect.
The "feed" stream should only be used when order is not important.

[&rarr; createFeedStream API](/apis/scuttlebot/ssb.html#createfeedstream-source)