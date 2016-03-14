function item (current, path, label) {
  var cls = ''
  if (current == path)
    cls = 'class="current"'
  return `<li ${cls}><a href="${path}" title="${label}">${label}</a></li>`
}

module.exports.basics = (c) => `<ul class="nav">
  ${item(c, '/basics/install-the-database.html', 'Install the database')}
  ${item(c, '/basics/open-a-client.html', 'Open a client')}
  ${item(c, '/basics/read-the-log.html', 'Read the log')}
  ${item(c, '/basics/publish-a-message.html', 'Publish a message')}
  ${item(c, '/basics/encryption.html', 'Encryption')}
  ${item(c, '/basics/publish-a-file.html', 'Publish a file')}
  ${item(c, '/basics/read-a-file.html', 'Read a file')}
</ul>`

module.exports.social = (c) => `<ul class="nav">
  ${item(c, '/social/social-network.html', 'Social network')}
  ${item(c, '/social/follow-users.html', 'Follow users')}
  ${item(c, '/social/update-your-profile.html', 'Update your profile')}
  ${item(c, '/social/query-the-social-graph.html', 'Query the social graph')}
  ${item(c, '/social/join-a-pub.html', 'Join a Pub')}
  ${item(c, '/social/create-a-pub.html', 'Create a Pub')}
  ${item(c, '/social/invite-users-to-a-pub.html', 'Invite users to a Pub')}
</ul>`

module.exports.advanced = (c) => `<ul class="nav">
  ${item(c, '/advanced/writing-applications.html', 'Writing applications')}
  ${item(c, '/advanced/creating-test-users.html', 'Creating test users')}
  ${item(c, '/advanced/creating-test-databases.html', 'Creating test databases')}
  ${item(c, '/advanced/message-schemas.html', 'Message schemas')}
  ${item(c, '/advanced/linking-messages.html', 'Linking messages')}
  ${item(c, '/advanced/advanced-queries.html', 'Advanced queries')}
  ${item(c, '/advanced/pull-streams.html', 'Pull streams')}
  ${item(c, '/advanced/crdts.html', 'CRDTs')}
  ${item(c, '/advanced/configure-scuttlebot.html', 'Configure Scuttlebot')}
</ul>`

module.exports.whitepapers = (c) => `<ul class="nav">
  ${item(c, '/whitepapers/secure-scuttlebutt.html', 'Secure Scuttlebutt')}
  ${item(c, '/whitepapers/secret-handshake.html', 'Secret Handshake')}
  ${item(c, '/whitepapers/private-box.html', 'Private Box')}
</ul>`

module.exports.modules = (c) => `<ul class="nav">
  ${item(c, '/modules/ssb-client.html', 'SSB-Client')}
  ${item(c, '/modules/scuttlebot.html', 'Scuttlebot')}
  ${item(c, '/modules/scuttlebot-blobs.html', 'Scuttlebot.Blobs')}
  ${item(c, '/modules/scuttlebot-friends.html', 'Scuttlebot.Friends')}
  ${item(c, '/modules/scuttlebot-gossip.html', 'Scuttlebot.Gossip')}
  ${item(c, '/modules/scuttlebot-invite.html', 'Scuttlebot.Invite')}
  ${item(c, '/modules/scuttlebot-private.html', 'Scuttlebot.Private')}
  ${item(c, '/modules/scuttlebot-replicate.html', 'Scuttlebot.Replicate')}
  ${item(c, '/modules/ssb-feed.html', 'SSB-Feed')}
  ${item(c, '/modules/ssb-keys.html', 'SSB-Keys')}
  ${item(c, '/modules/ssb-refs.html', 'SSB-Refs')}
  ${item(c, '/modules/ssb-msgs.html', 'SSB-Msgs')}
  ${item(c, '/modules/ssb-msg-schemas.html', 'SSB-Msg-Schemas')}
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