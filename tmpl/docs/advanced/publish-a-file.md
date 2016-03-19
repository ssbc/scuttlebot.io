To publish a file, you must first add it to Scuttlebot's blob-store.
Then, you announce the file by publishing its hash-ID in a message.

## Add a file to the blobstore

Scuttlebot maintains a "blobstore," which is a space of files that are named by their content-hash.
Add a file by streaming its content in the `blobs.add` method.

```js
var fs = require('fs')
var pull = require('pull-stream')
var toPull = require('stream-to-pull-stream')
pull(
  toPull.source(fs.createReadStream('./hello.txt')),
  sbot.blobs.add(function (err, hash) {
    // 'hash' is the hash-id of the blob
  })
)
```
```bash
$ cat ./hello.txt | sbot blobs.add
&hT/5N2Kgbdv3IsTr6d3WbY9j3a6pf1IcPswg2nyXYCA=.sha256
```

## Publish the file to the network

Adding a file will only affect the local blobstore.
To distribute the file, you must also link to it in an unencrypted message.

```js
sbot.publish({
  type: 'post',
  text: 'checkout [this file!]('+hash+')',
  mentions: [{
    link: hash,        // the hash given by blobs.add
    name: 'hello.txt', // optional, but recommended
    size: 12,          // optional, but recommended
    type: 'text/plain' // optional, but recommended
  }]
}, function (err, msg) {
  // ...
})
```
```bash
$ sbot publish --type post --text "checkout this file!" \
  --mentions.link "&hT/5N2Kgbdv3IsT...swg2nyXYCA=.sha256" \
  --mentions.name "hello.txt" \
  --mentions.size 12 \
  --mentions.type "text/plain"
```

When peers see the hash-ID in your message, they'll request the blob from your device, and then reshare it to other peers.