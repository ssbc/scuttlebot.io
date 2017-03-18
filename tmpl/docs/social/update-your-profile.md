Each user has a profile, comprised of data published by themself and others.
The profile content is controlled by [About messages](/docs/message-types/about.html).

## Get your ID

Use this command to get your ID:

```bash
sbot whoami
```
```js
sbot.whoami(function (err, info) {
  // info.id
})
```

## Set your username

There is no global registry, so you can choose any name you want.
(It's recommended you stay alphanumeric.)

```js
sbot.publish({
  type: 'about',
  about: yourId,
  name: name
}, cb)
```
```bash
sbot publish --type about --about {yourId} --name {name}
```

Replace `yourId` and `name` with your data.

Here's an example (don't copy this directly):

```js
sbot.publish({
  type: 'about',
  about: '@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519',
  name: 'bob'
}, cb)
```
```bash
sbot publish \
  --type about \
  --about "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519" \
  --name "bob"
```

## Set a profile pic

First, <a href="/docs/advanced/publish-a-file.html">add the image file to the blobstore.</a>
Then, publish this message with the outputted file-ID:

```js
sbot.publish({
  type: 'about',
  about: yourId,
  image: {
    link: fileID,       // required
    width: widthInPx,   // optional, but recommended
    height: heightInPx, // optional, but recommended
    name: fileName,     // optional, but recommended
    size: sizeInBytes,  // optional, but recommended
    type: mimeType      // optional, but recommended
  }
}, cb)
```
```bash
sbot publish \
  --type about \
  --about {yourId} \
  --image.link {fileId} \       # required
  --image.width {widthInPx} \   # optional, but recommended
  --image.height {heightInPx} \ # optional, but recommended
  --image.name {fileName} \     # optional, but recommended
  --image.size {sizeInBytes} \  # optional, but recommended
  --image.type {mimeType}       # optional, but recommended
```


Here's an example (don't copy this directly):

```js
sbot.publish({
  'type': 'about',
  'about': '@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519',
  'image': {
    'link': '&NfP4H4NZCfiPQ6AZ6fEmilbFL8Hz3wTQVeaxbCnNEt4=.sha256',
    'size': 347856,
    'type': 'image/png',
    'width': 512,
    'height': 512
  }
})
```
```bash
sbot publish \
  --type about \
  --about "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519" \
  --image.link "&NfP4H4NZCfiPQ6AZ6fEmilbFL8Hz3wTQVeaxbCnNEt4=.sha256" \
  --image.size 347856 \
  --image.type "image/png" \
  --image.width 512 \
  --image.height 512
```