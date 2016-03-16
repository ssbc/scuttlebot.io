## Configure Scuttlebot

Scuttlebot keeps all data and configuration in the `~/.ssb` directory.

Configuration is stored in `~/.ssb/config`, which is a JSON file:

```
{
  "host": "",
  "port": 8008,
  "timeout": 30000,
  "pub": true,
  "local": true,
  friends: {
    "dunbar": 150,
    "hops": 3
  },
  "gossip": {
    "connections": 2
  }
}
```

You can also specify config flags in the `sbot server` call.
For example:

```bash
sbot server --port 1234 --timeout 500
```

The options:

- `host` *(string)* The domain or ip address for `sbot`. Defaults to your public ip address.
- `port` *(string|number)* The port for `sbot`. Defaults to `8008`.
- `timeout`: *(number)* Number of milliseconds a replication stream can idle before it's automatically disconnected. Defaults to `30000`.
- `pub` *(boolean)* Replicate with pub servers. Defaults to `true`.
- `local` *(boolean)* Replicate with local servers found on the same network via `udp`. Defaults to `true`.
- `friends.dunbar` *(number)* [`Dunbar's number`](https://en.wikipedia.org/wiki/Dunbar%27s_number). Number of nodes your instance will replicate. Defaults to `150`.
- `friends.hops` *(number)* How many friend of friend hops to replicate. Defaults to `3`.
- `gossip.connections` *(number)* How many other nodes to connect with at one time. Defaults to `2`.