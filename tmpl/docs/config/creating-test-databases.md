## Creating test databases

Scuttlebot keeps all data and configuration in the `~/.ssb` directory.

To create databases for testing, you can specify a different data-directory using the `ssb_appname` environment variable.
For instance:

```bash
ssb_appname=test ssb-server start
```

This will spawn the server with the `~/.test` data-directory.