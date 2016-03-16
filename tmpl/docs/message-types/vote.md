## Vote

Vote-messages signal approval about someone or something.
Votes can be on users, messages, or blobs.

The `value` should be negative, 0, or positive.
If the value is non-numeric, it is invalid.

The `reason` is an optional string to explain the vote.

```js
{
  type: 'vote',
  vote: {
    link: Link,
    value: -1|0|1,
    reason: String?
  }
}
```

### Voting on users

A positive vote on a user signals trust in that user.
It's generally used to "confirm" that you think that user publishes good information.

A negative vote on a user is a "flag."
You can flag a user for publishing bad information, making false claims, or being abusive.
You can also flag a user if the owner lost the keys.

Common values for `reason` in downvotes on users:

 - `dead`: Dead Account / Lost Keys
 - `spam`: Spammer
 - `abuse`: Abusive behavior

### Voting on messages/blobs

A positive vote on a message or blobs signals that you like the content of the message/blobs.

A negative vote on a message is a "flag" that signals that you think the message/blob content should not be used or seen.