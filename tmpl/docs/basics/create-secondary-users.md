## Create secondary users

By default, Scuttlebot uses a "master" identity/feed, which `sbot.publish()` will append new messages to.
If you want to publish to additional feeds, you can load the keypair and then use this library to do so.

``` js
var ssbFeed = require('ssb-feed')
var ssbKeys = require('ssb-keys')

// create the new feed
var alice = ssbFeed(sbot, ssbKeys.generate())

// Post to alice's feed
alice.publish({
  type: 'post',
  text: 'hello world, I am alice.'
}, function (err) { ... })
```