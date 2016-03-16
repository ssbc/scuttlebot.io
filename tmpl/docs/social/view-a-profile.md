## Get all 'about' messages

```js
var pull = require('pull-stream')
pull(
  sbot.links({
    source: userId,
    dest: userId,
    rel: 'about',
    values: true
  }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot links 
  --source {userId}
  --dest {userId}
  --rel about
  --values
```

This query will get all of the 'about' messages that the user has published about themselves.
If you want to get 'about' messages published by everyone, remove the `source` parameter.

[About messages](/docs/message-types/about.html) put their name & image attributes outside of the link, so we need `links` to fetch the full message-value.
That's why `values: true` is set.

[&rarr; links API](/apis/scuttlebot/ssb.html#links-source)


