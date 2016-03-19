## View a profile

To see somebody's profile, you fetch all of their 'about' messages.
You can then accept the last `name` and `image` value they published.

This is how you get the self-published about messages:

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
sbot links \
  --source {userId} \
  --dest {userId} \
  --rel about \
  --values
```

This query will get all of the 'about' messages that the user has published about themselves.
If you want to get 'about' messages published by everyone, remove the `source` parameter.

Here's an example usage (don't copy this directly):

```js
var pull = require('pull-stream')
pull(
  sbot.links({
    source: '@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519',
    dest: '@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519',
    rel: 'about',
    values: true
  }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot links \
  --source "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519" \
  --dest "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519" \
  --rel about \
  --values
```

And some of the output:

```json
{
  "source": "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519",
  "rel": "about",
  "dest": "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519",
  "key": "%NatgQ6Y0iHIGogGgUN5wHlYH9afOWFJY8hW4SRlsGaE=.sha256",
  "value": {
    "previous": "%hDNjq+IeXWuP4Qeju38q2CgF+oTqRG5k16FqVGaYg3s=.sha256",
    "author": "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519",
    "sequence": 257,
    "timestamp": 1443544832442,
    "hash": "sha256",
    "content": {
      "type": "about",
      "about": "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519",
      "name": "bob",
      "image": {
        "link": "&NfP4H4NZCfiPQ6AZ6fEmilbFL8Hz3wTQVeaxbCnNEt4=.sha256",
        "size": 347856,
        "type": "image/png",
        "width": 512,
        "height": 512
      }
    },
    "signature": "Rp8E4H8fz4hALwN6PuiRURJZVWMHxe0fAlV+M3kW0JMV049+Ga72BpYQgQcNOAEZqhtvmXaSS9uHuGl6/RyZBQ==.sig.ed25519"
  }
}
```

