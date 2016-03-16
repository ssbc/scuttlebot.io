function item (current, path, label) {
  var cls = ''
  if (current == path)
    cls = 'class="current"'
  return `<li ${cls}><a href="${path}" title="${label}">${label}</a></li>`
}

module.exports['docs-basics'] = (c) => `<ul class="nav">
  ${item(c, '/docs/basics/install-the-database.html', 'Install the database')}
  ${item(c, '/docs/basics/open-a-client.html', 'Open a client')}
  ${item(c, '/docs/basics/publish-a-message.html', 'Publish a message')}
  ${item(c, '/docs/basics/read-the-log.html', 'Read the log')}
  ${item(c, '/docs/basics/publish-a-file.html', 'Publish a file')}
  ${item(c, '/docs/basics/read-a-file.html', 'Read a file')}
  ${item(c, '/docs/basics/encryption.html', 'Encryption')}
</ul>`

module.exports['docs-social'] = (c) => `<ul class="nav">
  ${item(c, '/docs/social/follow-users.html', 'Follow users')}
  ${item(c, '/docs/social/query-the-social-graph.html', 'Query the social graph')}
  ${item(c, '/docs/social/update-your-profile.html', 'Update your profile')}
  ${item(c, '/docs/social/view-a-profile.html', 'View a profile')}
  ${item(c, '/docs/social/create-new-users.html', 'Create new users')}
  ${item(c, '/docs/social/join-a-pub.html', 'Join a Pub')}
  ${item(c, '/docs/social/create-a-pub.html', 'Create a Pub')}
</ul>`

module.exports['docs-message-types'] = (c) => `<ul class="nav">
  ${item(c, '/docs/message-types/post.html', 'Post')}
  ${item(c, '/docs/message-types/about.html', 'About')}
  ${item(c, '/docs/message-types/contact.html', 'Contact')}
  ${item(c, '/docs/message-types/vote.html', 'Vote')}
  ${item(c, '/docs/message-types/pub.html', 'Pub')}
  ${item(c, '/docs/message-types/custom-types.html', 'Custom Types')}
</ul>`

module.exports['docs-advanced'] = (c) => `<ul class="nav">
  ${item(c, '/docs/advanced/links.html', 'Links')}
  ${item(c, '/docs/advanced/feed-send-time-sort.html', 'Feed (send time sort)')}
  ${item(c, '/docs/advanced/feed-receive-time-sort.html', 'Feed (receive time sort)')}
  ${item(c, '/docs/advanced/messages-by-type.html', 'Messages by type')}
  ${item(c, '/docs/advanced/messages-by-user.html', 'Messages by user')}
  ${item(c, '/docs/advanced/watch-for-messages.html', 'Watch for messages')}
  ${item(c, '/docs/advanced/votes-on-a-message.html', 'Votes on a message')}
  ${item(c, '/docs/advanced/user-files.html', 'User files')}
  ${item(c, '/docs/advanced/links-between-users.html', 'Links between users')}
  ${item(c, '/docs/advanced/post-threads.html', 'Post threads')}
</ul>`

module.exports['docs-config'] = (c) => `<ul class="nav">
  ${item(c, '/docs/config/configure-scuttlebot.html', 'Configure Scuttlebot')}
  ${item(c, '/docs/config/creating-test-databases.html', 'Creating test databases')}
  ${item(c, '/docs/config/creating-test-users.html', 'Creating test users')}
</ul>`

module.exports['apis-scuttlebot'] = (c) => `<ul class="nav">
  ${item(c, '/apis/scuttlebot/ssb.html', 'SSB')}
  ${item(c, '/apis/scuttlebot/blobs.html', 'Blobs')}
  ${item(c, '/apis/scuttlebot/block.html', 'Block')}
  ${item(c, '/apis/scuttlebot/friends.html', 'Friends')}
  ${item(c, '/apis/scuttlebot/gossip.html', 'Gossip')}
  ${item(c, '/apis/scuttlebot/invite.html', 'Invite')}
  ${item(c, '/apis/scuttlebot/private.html', 'Private')}
  ${item(c, '/apis/scuttlebot/replicate.html', 'Replicate')}
</ul>`

module.exports['apis-modules'] = (c) => `<ul class="nav">
  ${item(c, '/apis/modules/ssb-client.html', 'SSB-Client')}
  ${item(c, '/apis/modules/ssb-feed.html', 'SSB-Feed')}
  ${item(c, '/apis/modules/ssb-keys.html', 'SSB-Keys')}
  ${item(c, '/apis/modules/ssb-ref.html', 'SSB-Ref')}
  ${item(c, '/apis/modules/ssb-msgs.html', 'SSB-Msgs')}
  ${item(c, '/apis/modules/ssb-msg-schemas.html', 'SSB-Msg-Schemas')}
  ${item(c, '/apis/modules/ssb-markdown.html', 'SSB-Markdown')}
  ${item(c, '/apis/modules/ssb-config.html', 'SSB-Config')}
  ${item(c, '/apis/modules/secret-stack.html', 'Secret-Stack')}
  ${item(c, '/apis/modules/muxrpc.html', 'MuxRPC')}
  ${item(c, '/apis/modules/muxrpcli.html', 'MuxRPCCli')}
  ${item(c, '/apis/modules/mdmanifest.html', 'MDManifest')}
  ${item(c, '/apis/modules/graphmitter.html', 'Graphmitter')}
</ul>`

module.exports['apis-pull-stream'] = (c) => `<ul class="nav">
  ${item(c, '/apis/pull-stream/pull-stream.html', 'Pull-Stream')}
  ${item(c, '/apis/pull-stream/core-sources.html', 'Source Functions')}
  ${item(c, '/apis/pull-stream/core-throughs.html', 'Through Functions')}
  ${item(c, '/apis/pull-stream/core-sinks.html', 'Sink Functions')}
  ${item(c, '/apis/pull-stream/pull-stream-to-stream.html', 'Pull-Stream-to-Stream')}
  ${item(c, '/apis/pull-stream/stream-to-pull-stream.html', 'Stream-to-Pull-Stream')}
  ${item(c, '/apis/pull-stream/pull-paramap.html', 'Pull-Paramap')}
  ${item(c, '/apis/pull-stream/pull-cat.html', 'Pull-Cat')}
  ${item(c, '/apis/pull-stream/pull-pushable.html', 'Pull-Pushable')}
  ${item(c, '/apis/pull-stream/pull-notify.html', 'Pull-Notify')}
  ${item(c, '/apis/pull-stream/pull-pause.html', 'Pull-Pause')}
  ${item(c, '/apis/pull-stream/pull-timeout.html', 'Pull-Timeout')}
  ${item(c, '/apis/pull-stream/pull-window.html', 'Pull-Window')}
  ${item(c, '/apis/pull-stream/pull-otherwise.html', 'Pull-Otherwise')}
  ${item(c, '/apis/pull-stream/pull-ws-server.html', 'Pull-WS-Server')}
</ul>`

module.exports['apis-community'] = (c) => `<ul class="nav">
  ${item(c, '/apis/community/ssbify.html', 'SSBify')}
  ${item(c, '/apis/community/git-ssb.html', 'Git-SSB')}
  ${item(c, '/apis/community/ssb-notifier.html', 'SSB-Notifier')}
  ${item(c, '/apis/community/patchwork-threads.html', 'Patchwork-Threads')}
</ul>`

module.exports['guides-concepts'] = (c) => `<ul class="nav">
  ${item(c, '/guides/concepts/intro.html', 'Intro')}
</ul>`

module.exports['guides-how-to-use-pull-streams'] = (c) => `<ul class="nav">
  ${item(c, '/guides/how-to-use-pull-streams/intro.html', 'Intro')}
</ul>`

module.exports['guides-lets-write-a-file-sharing-app'] = (c) => `<ul class="nav">
  ${item(c, '/guides/lets-write-a-file-sharing-app/intro.html', 'Intro')}
</ul>`

module.exports['guides-lets-write-a-private-messaging-app'] = (c) => `<ul class="nav">
  ${item(c, '/guides/lets-write-a-private-messaging-app/intro.html', 'Intro')}
</ul>`

module.exports['guides-lets-write-a-todo-list-app'] = (c) => `<ul class="nav">
  ${item(c, '/guides/lets-write-a-todo-list-app/intro.html', 'Intro')}
</ul>`