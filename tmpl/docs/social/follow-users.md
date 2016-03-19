To stay in sync with somebody, you follow their feed.
Scuttlebot will search the network for new messages by your followed users.

Following is controlled by [Contact messages](/docs/message-types/contact.html) that are published on your feed.

## Follow users

```js
sbot.publish({
  type: 'contact',
  contact: userId,
  following: true 
}, cb)
```
```bash
sbot publish --type contact --contact {userId} --following
```

Example usage (don't copy this directly):

```js
sbot.publish({
  type: 'contact',
  contact: '@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519',
  following: true 
}, cb)
```
```bash
sbot publish \
  --type contact \
  --contact "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519" \
  --following
```

## Unfollow users

```js
sbot.publish({
  type: 'contact',
  contact: userId,
  following: false
}, cb)
```
```bash
sbot publish --type contact --contact {userId} --no-following
```

Example usage (don't copy this directly):

```js
sbot.publish({
  type: 'contact',
  contact: '@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519',
  following: false 
}, cb)
```
```bash
sbot publish \
  --type contact \
  --contact "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519" \
  --no-following
```