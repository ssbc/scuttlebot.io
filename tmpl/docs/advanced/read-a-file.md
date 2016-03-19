When Scuttlebot finds the hash-ID of a file in a message, it will request its contents from the network.
You can then read the file from the blobstore.

## Wait for the file to arrive

Files always arrive after the message that first announces it.
So, it's a good idea to call `want`, which will return when the file has arrived:

```js
// want will not cb() until the file arrives
sbot.blobs.want(hash, function (err) {
  // ready to read
})
```

```bash
$ sbot blobs.want "&hT/5N2Kgbdv3...XYCA=.sha256"
```

## Read a file

Once the file is available, you can fetch it using 'get':

```js
var pull = require('pull-stream')
pull(
  sbot.blobs.get(hash),
  pull.collect(function (err, values) {
    // eg values.join('') == 'hello, world'
  })
)
```
```bash
$ sbot blobs.get "&hT/5N2Kgbdv3...XYCA=.sha256"
hello, world
```