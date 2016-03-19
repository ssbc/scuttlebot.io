## Fetch the social graph

You can see who follows whom by calling the `friends.all` method.
It will provide an object of `{ userId => [followedIds] }`.

```js
sbot.friends.all(function (err, graph) {
  // ...
})
```
```bash
sbot friends.all
```

Example output:

```json
{
  "@ptAi6iWwMtqkbpO6YEsLXhucEZkqDgmffCCE0HZYXmk=.ed25519": {
    "@8HsIHUvTaWg8IXHpsb8dmDtKH8qLOrSNwNm298OkGoY=.ed25519": true,
    "@uRECWB4KIeKoNMis2UYWyB2aQPvWmS3OePQvBj2zClg=.ed25519": true,
    "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519": true,
    "@ye+QM09iPcDJD6YvQYjoQc7sLF/IFhmNbEqgdzQo3lQ=.ed25519": true
  },
  "@N8xBJlwMzP/eKNz50i0Eq81qtg/S70YkifNA0mBzbKE=.ed25519": {
    "@D0GsAaMyt96Ze3q1YiiuzWhPkyou2fVTUgw8Xr+G7Jo=.ed25519": true
  },
  "@QgHY6P7NGW9qFJVjAMl36EkapanG3iyjCBo+8/ZwXTY=.ed25519": {
    "@uRECWB4KIeKoNMis2UYWyB2aQPvWmS3OePQvBj2zClg=.ed25519": true
  }
}
```

## List degrees-of-connection between users

If you want to find out how connected you (or somebody else) is, you can use the `friends.hops` method.
This will list all known user-ids, and how many social-connections away they are.

For instance:
 - Somebody you follow will be 1 hop away.
 - Somebody followed by someone you follow will be 2 hops away.<br><small>(a "friend of a friend")</small>
 - etc

```js
sbot.friends.hops(userId, function (err, list) {
  // ...
})
```
```bash
sbot friends.hops {userId}
```

Example output:

```json
{
  "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519": 0,
  "@jpq43ybzjW+u2lABZCPD8OVVvp85CKeY4qSlXTA31j4=.ed25519": 1,
  "@V/0ZcEFyPagUhs6Cqc9Su98rpzna4zBRXXbAZOtF6p4=.ed25519": 1,
  "@Tc/1cgullpQYaQk/JKNwDAsfniVADcU9lulwYXrGsos=.ed25519": 1,
  "@GLH9VPzvvU2KcnnUu2n5oxOqaTUtzw+Rk6fd/Kb9Si0=.ed25519": 1,
  "@6ilZq3kN0F+dXFHAPjAwMm87JEb/VdB+LC9eIMW3sa0=.ed25519": 1,
  "@9sCXwCJZJ9doPcx7oZ1gm7HNZapO2Z9iZ0FJHJdROio=.ed25519": 2,
  "@GslEFXx7Oz3ooO6z4+6JRzdtKpzeNqb4aYv8M9wGqoU=.ed25519": 2,
  "@yARQ14OOZXgI8OU8UsgQhZSSmzPbuwCgC5gXxmRAhkE=.ed25519": 2,
  "@bCbTcYMmSwYbbiDBUnSbhobzYnayKesq0LNmTDSvR6Y=.ed25519": 2,
  "@v4pOKqdvSpv/Rm/Eb+g5gCfsBXVVzKbmMT/F6IW7lds=.ed25519": 2,
  "@+gpZcBi1p1E2omC9L3bXUWduYWfrUZqwWcednMxy+Rw=.ed25519": 3,
  "@OweKXqiKl49z9pzp764z0xvzOfHqTacYxuLubLzrCgQ=.ed25519": 3
}
```