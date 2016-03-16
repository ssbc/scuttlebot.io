## Pub

Pub-messages announce the ID, address, and port of public Pub users.
They are automatically published by Scuttlebot after successfully using an invite to a Pub.

When Scuttlebot sees a pub-message, it will add the link/host/port triple to its peers table, and connect to the peer in the future to sync messages.

```js
{
  type: 'pub',
  pub: {
    link: FeedLink,
    host: String,
    port: Number
  }
}
```