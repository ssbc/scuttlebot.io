## Read your log

Use this command to get your ID:

```bash
sbot whoami
```
```js
sbot.whoami(function (err, info) {
  // info.id
})
```

Now, use that ID to get your message history:

```bash
sbot createUserStream --id {yourId}
```
```js
var pull = require('pull-stream')
pull(
  sbot.createUserStream({ id: yourId }),
  pull.collect(err, msgs) {
    if (err)
      throw err
    console.log(msgs)
  })
)
```

The output will look something like this:

```json
{
  "key": "%vhP8tyeB+7cVLbIHd6wEd36AVEcUsZgwTYigpcx6Qn0=.sha256",
  "value": {
    "previous": "%NA/4By9K3L0OmVS2eD8le05uUW94ukDNbX16V3ZApi8=.sha256",
    "author": "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519",
    "sequence": 2,
    "timestamp": 1439158769923,
    "hash": "sha256",
    "content": {
      "type": "post",
      "text": "Hello, world!"
    },
    "signature": "EQngCchOejwfWAcZ2Xgr5QR6iquBQVlF++1/ZOLlRJQfyj4TxHk6MHRUKV/o7L35h2zfL1K+Il991JxrxCT+BA==.sig.ed25519"
  }
}
```

Notice that your messages are wrapped in an envelope with various header values, including your ID, your signature, and a timestamp.

The `key` value is a sha256 hash of your message.
You can `sbot.get()` the message using that key.