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
  ${item(c, '/docs/social/join-a-pub.html', 'Join a Pub')}
  ${item(c, '/docs/social/create-a-pub.html', 'Create a Pub')}
</ul>`

module.exports['docs-message-types'] = (c) => `<ul class="nav">
  ${item(c, '/docs/message-types/post.html', 'Post')}
  ${item(c, '/docs/message-types/about.html', 'About')}
  ${item(c, '/docs/message-types/contact.html', 'Contact')}
  ${item(c, '/docs/message-types/vote.html', 'Vote')}
  ${item(c, '/docs/message-types/pub.html', 'Pub')}
</ul>`

module.exports['docs-advanced'] = (c) => `<ul class="nav">
  ${item(c, '/docs/advanced/message-schemas.html', 'Message schemas')}
  ${item(c, '/docs/advanced/linking-messages.html', 'Linking messages')}
  ${item(c, '/docs/advanced/advanced-queries.html', 'Advanced queries')}
  ${item(c, '/docs/advanced/pull-streams.html', 'Pull streams')}
  ${item(c, '/docs/advanced/crdts.html', 'CRDTs')}
</ul>`

module.exports['docs-config'] = (c) => `<ul class="nav">
  ${item(c, '/docs/config/configure-scuttlebot.html', 'Configure Scuttlebot')}
  ${item(c, '/docs/config/creating-test-users.html', 'Creating test users')}
  ${item(c, '/docs/config/creating-test-databases.html', 'Creating test databases')}
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

module.exports['apis-common'] = (c) => `<ul class="nav">
  ${item(c, '/apis/common/ssb-client.html', 'SSB-Client')}
  ${item(c, '/apis/common/ssb-feed.html', 'SSB-Feed')}
  ${item(c, '/apis/common/ssb-keys.html', 'SSB-Keys')}
  ${item(c, '/apis/common/ssb-refs.html', 'SSB-Refs')}
  ${item(c, '/apis/common/ssb-msgs.html', 'SSB-Msgs')}
  ${item(c, '/apis/common/ssb-msg-schemas.html', 'SSB-Msg-Schemas')}
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