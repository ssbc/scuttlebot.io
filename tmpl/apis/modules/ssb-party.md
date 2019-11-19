# ssb-party

Get a [scuttlebot][] client instance. If scuttlebot isn't running, start it in the background, and keep it running until all the clients have disconnected.

## Usage

```js
var createSsbParty = require('ssb-party')
```

### `createSsbParty([opts, ]cb)`

- `opts.keys`: an [ssb-keys][] instance. default loads from `~/.ssb/secret`
- `opts.host`: host to connect to or start the server on. default `"localhost"`
- `opts.port`: port to connect to or start the server on. default 8008
- `opts.appKey`: secret-stack capability key (Buffer). default sbot's appKey

Other properties of the `opts` object will be used as [ssb-config][]
overrides, but if the server is already running, these will not affect the existing server's config.

### Example

simplest case: connect to or start a local ssb-server:
```
var party = require('ssb-party')

party(function (err, sbot) {
  // ...
})
```

### Config

- `config.timers.keepalive`: minimum time (ms) to keep the server online after the last client disconnects. default: 30s
- `config.party.out`: where to put standard output of sbot. may be a path (absolute, or relative to ssb's directory), or `false` to discard, or `true` to pass through to the controlling terminal. default: `"debug.log"`
- `config.party.err`: where to put standard error of sbot. default: same as `config.party.out`

[scuttlebot]: https://github.com/ssbc/ssb-server
[ssb-keys]: https://github.com/ssbc/ssb-keys
[ssb-config]: https://github.com/ssbc/ssb-config
[secret-stack]: https://github.com/ssbc/secret-stack

## License

Copyright (c) 2017 [@cel](@f/6sQ6d2CMxRUhLpspgGIulDxDCwYD7DzFzPNr7u5AU=.ed25519)

Usage of the works is permitted provided that this instrument
is retained with the works, so that any entity that uses the
works is notified of this instrument.

DISCLAIMER: THE WORKS ARE WITHOUT WARRANTY.

[Repository](http://git.scuttlebot.io/%25bS%2FWGqQrhQfH8eoyWieK%2B9M56DjJ8Q4ulkvb6sXZwPo%3D.sha256)
