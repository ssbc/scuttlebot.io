## About-user messages

```js
var pull = require('pull-stream')
pull(
  sbot.links({ dest: userId, rel: 'about', values: true }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot links --dest {userId} --rel about --values
```

[About messages](/docs/message-types/about.html) put their name & image attributes outside of the link, so we need `links` to fetch the full message-value.
That's why `values: true` is set.

[&rarr; links API](/apis/scuttlebot/ssb.html#links-source)


