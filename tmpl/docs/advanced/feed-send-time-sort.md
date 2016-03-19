## Messages ordered by timestamp

You can fetch all of the messages in your Scuttlebot DB, merged into one stream.
To fetch them ordered by the timestamp at time-of-publish, use 'createFeedStream'.

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