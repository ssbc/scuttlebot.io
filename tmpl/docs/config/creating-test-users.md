## Creating test users

Scuttlebot keeps all data and configuration in the `~/.ssb` directory.

The primary user's private key is kept in the `~/.ssb/secret` file.

If you want to set a new primary user, while still using the same database, you can move `private` to some other location (eg `~/ssb/secret.backup`).
Scuttlebot will automatically create a new user and secret, when started next.

Alternatively, you can [create secondary users](/docs/social/create-new-users.html).