# Get active Scuttlebot config

To see what config options Scuttlebot is currently using, run:

```bash
$ sbot config
{
  "host": "",
  "port": 8008,
  "timeout": 30000,
  "pub": true,
  "local": true,
  "friends": {
    "dunbar": 150,
    "hops": 3
  },
  "gossip": {
    "connections": 2,
    "seeds": [
      "slip.space:8008:@0GLMsG6IgXdv+GjG0U5UnZlwxHnomlfmrlWugx8i4dg=.ed25519"
    ]
  },
  "path": "/Users/bob/.ssb",
  "_": [
    "config"
  ]
}

```