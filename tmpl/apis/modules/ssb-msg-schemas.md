# ssb-msg-schemas

Functions to create common SSB messages.

```js
var schemas = require('ssb-msg-schemas')

schemas.post(
  text,
  root /*optional*/,
  branch /*optional*/,
  mentions /*optional*/,
  recps /*optional*/,
  channel /*optional*/
)
schemas.name(id, name)
schemas.image(id, imgLink)
schemas.follow(userId)
schemas.unfollow(userId)
schemas.block(userId)
schemas.unblock(userId)
schemas.vote(id, vote, reason /*optional*/)
schemas.pub(id, host, port)
```

Related docs:
  - [Message schemas](/docs/message-types/custom-types.html)
  - [Type: post](/docs/message-types/post.html)
  - [Type: about](/docs/message-types/about.html)
  - [Type: contact](/docs/message-types/contact.html)
  - [Type: vote](/docs/message-types/vote.html)
  - [Type: pub](/docs/message-types/pub.html)

[View on Github](https://github.com/ssbc/ssb-msg-schemas)