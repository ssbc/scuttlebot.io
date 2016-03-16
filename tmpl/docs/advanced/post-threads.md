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