Scuttlebot uses a [gossip protocol](https://en.wikipedia.org/wiki/Gossip_protocol), which means that users download and reshare messages on each other' behalf.
As a result, standard connection-based encryption (like HTTPS) is not enough to hide information from non-recipients.

Instead, Scuttlebot uses [end-to-end encryption](https://en.wikipedia.org/wiki/End-to-end_encryption).
This is exposed in the JS-only [Scuttlebot.Private API](/apis/scuttlebot/private.html).

> You can [read the details of the encryption protocol here](/more/protocols/private-box.html).

## Publish an Encrypted Message

Private publishing works just like the usual publish method, except that you specify a list of recipient IDs after the message content.
Be sure to include your own ID, so that you'll be able to read the message back.

```js
sbot.private.publish(
  // message:
  {
    type: 'post',
    text: 'Hello, friend!'
  },
  // recipient PKs:
  [
    '@hxGxqPrplLjRG2vtj...wQpS730nNwE=.ed25519',
    '@EMovhfIrFk4NihAKn...8pTxJNgvCCY=.ed25519'
  ],
  // cb:
  function (err, privateMsg) {
    // privateMsg.value.content is
    // an encrypted string
  }
)
```

The message will be encrypted and then published on your log, like any other message.
However, only the recipients will be able to decrypt it.

Here's an example of what it will look like:

```json
{
  "key": "%elZpRx8X4LJfc06p4lEpagtC0pZ6JGMYnSchrqro+1o=.sha256",
  "value": {
    "previous": "%KaDR/KnV/pssiekn8wE5Qh/Lqfuecx6lnCJbWaCE3h8=.sha256",
    "author": "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519",
    "sequence": 3290,
    "timestamp": 1458405498947,
    "hash": "sha256",
    "content": "/TDSbpL+OXU0sbHBIZDaXdDe6ATeyv0krt9H47GD6pV41X++tGsaQwbFLvsnCsuInBfE4IToVJ73upO55ObK2trGF6tY+/8MQtDg1sHN3xYDz/GEV56qZKdEV1fEKcyxqhvW/phHEmXBWRkUQnDoUBlIW...Mmj0rRwj.box",
    "signature": "g3S2BPJSX+uiIEawcEDBhgNEMtjkrHDVHamxBeOVrow1rfsJEmX2CZFRyshwjaQecr8EjBDCL2T8Lxllc+gbAA==.sig.ed25519"
  }
}
```

## Decrypt a Message

To decrypt a message, you just send its content-string through the `unbox` method.
If you were a recipient, you'll get the content-object back:

```js
sbot.private.unbox(
  privateMsg.value.content,
  function (err, content) {
    // 'content' is now an object
    // (if you were a recipient)
  }
)
```

## Is a message encrypted?

You may have noticed, the encrypted message had a string for its `content` attribute, whereas other messages will usually have an object.
This gives a simple heuristic for checking if a message is encrypted or not -- just check the `.content` value type:

```js
function isPlaintext (msg) {
  return (typeof msg.value.content == 'object')
}
function isEncrypted (msg) {
  return (typeof msg.value.content == 'string')
}
```