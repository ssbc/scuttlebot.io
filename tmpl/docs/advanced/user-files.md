## Files referenced by a user

```js
var pull = require('pull-stream')
pull(
  sbot.links({ source: userId, dest: '&' }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot links --source {userId} --dest &
```

All IDs have a "sigil" character defining what type of object the ID references.
(Blobs start with "&", users start with "@", and messages start with "%").

In `links`, you can use the sigil to filter the source or dest by the ID type.

[&rarr; links API](/apis/scuttlebot/ssb.html#links-source)