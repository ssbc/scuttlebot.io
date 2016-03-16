## Messages ordered by timestamp

```js
var pull = require('pull-stream')
pull(
  sbot.createFeedStream({ reverse: true }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot feed --reverse
```

**Important note:** message timestamps are set by the wall clock of the publisher, and may be incorrect.
The "feed" stream should only be used when order is not important.

[&rarr; createFeedStream API](/apis/scuttlebot/ssb.html#createfeedstream-source)

---

## Messages ordered by receive-time

```js
var pull = require('pull-stream')
pull(
  sbot.createLogStream({ reverse: true }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot log --reverse
```

The receive time of messages will differ for each user.
The "log" stream's order will never be the same between two devices.

[&rarr; createLogStream API](/apis/scuttlebot/ssb.html#createlogstream-source)

---

## Messages by type

```js
var pull = require('pull-stream')
pull(
  sbot.messagesByType({ type: 'post' }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot logt --type post
```

The ordering in `messagesByType` will be the same as the ordering in `createLogStream`.

[&rarr; messagesByType API](/apis/scuttlebot/ssb.html#messagesbytype-source)

---

## Messages by user

```js
var pull = require('pull-stream')
pull(
  sbot.createUserStream({ id: userId }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot createUserStream --id {userId}
```

The order of messages in an individual user's feed will be the same for all devices, and can be trusted.

[&rarr; createUserStream API](/apis/scuttlebot/ssb.html#createuserstream-source)

---

## Watch for new messages

```js
var pull = require('pull-stream')
pull(
  sbot.createLogStream({ live: true }),
  pull.drain(function (msg) { ... })
)
```
```bash
sbot log --live
```

[&rarr; createLogStream API](/apis/scuttlebot/ssb.html#createlogstream-source)

---

## Watch for new messages by a user

```js
var pull = require('pull-stream')
pull(
  sbot.createUserStream({ id: userId, live: true }),
  pull.drain(function (msg) { ... })
)
```
```bash
sbot createUserStream --id {userId} --live
```

Notice that `pull.drain` is used instead of `pull.collect`, so that new messages are handled immediately.

[&rarr; createUserStream API](/apis/scuttlebot/ssb.html#createuserstream-source)

---

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

---

## Votes on a message

```js
var pull = require('pull-stream')
pull(
  sbot.links({ dest: messageId, rel: 'vote' }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot links --dest {messageId} --rel vote --values
```

[Vote messages](/docs/message-types/vote.html) put the value and reason data in the link, so we'll get those attributes in the output of `links` without including the full message value.
That's why `values: true` is not set.

[&rarr; links API](/apis/scuttlebot/ssb.html#links-source)

---

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

---

## Links from one user to another

```js
var pull = require('pull-stream')
pull(
  sbot.links({ source: userId1, dest: userId2 }),
  pull.collect(function (err, msgs) { ... })
)
```
```bash
sbot links --source {userId1} --dest {userId2}
```

[&rarr; links API](/apis/scuttlebot/ssb.html#links-source)

---

## Full post-thread

```js
sbot.relatedMessages({ id: messageId }, function (err, thread) {
  ...
})
```
```bash
sbot relatedMessages --id {messageId}
```

This will provide a tree-structure showing all messages that link to the given message and its children.

[&rarr; relatedMessages API](/apis/scuttlebot/ssb.html#relatedmessages-async)