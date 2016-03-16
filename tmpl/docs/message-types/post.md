## Post

A post is a text-based message, for a public or private audience.
It can be a reply to other posts.

There's not a limit on the length of the text, but all Scuttlebot messages (including their headers) must be less than 8KB.

```js
{
  type: 'post',
  text: String,
  channel: String?,
  root: MsgLink?,
  branch: MsgLink?,
  recps: FeedLinks?,
  mentions: Links?
}
```

### Text

`text` is a markdown string that includes the body of the post.
See [SSB-Markdown](/apis/modules/ssb-markdown.html) for some Scuttlebot-specific markdown rules.

### Channel

`channel` is optionally used for categorization.
It's similar to subreddits or chat channels.

### Root and branch

`root` and `branch` are for replies.
`root` should point to the topmost message in the thread.
`branch` should point to the message in the thread which is being replied to.

In the first reply of a thread, `root === branch`, and both should be included.
`root` and `branch` should only point to `type: post` messages.
If the post is about another message-type, use `mentions`.

### Mentions

`mentions` is a generic reference to other feeds, entities, or blobs.

 - User mentions: for when a user is referenced in the `text`.
 - Blob mentions: for when a file is referected in the `text`.
 - Message mentions: for when a message is referenced in the `text`.

### Recps

`recps` is a list of user-links specifying who the message is for.
This is typically used for encrypted messages, to specify who the message was encrypted for, but it can be used in unencrypted messages as well.