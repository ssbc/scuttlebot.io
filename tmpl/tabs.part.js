function item (current, name, path, label) {
  var cls = ''
  if (current == name)
    cls = 'class="current"'
  return `<div ${cls}><a href="${path}" title="${label}">${label}</a></div>`
}

module.exports.sections = (c) => `<div class="tabs big">
  ${item(c, 'docs', '/docs/basics/install-the-database.html', 'Docs')}
  ${item(c, 'apis', '/apis/scuttlebot/ssb.html', 'APIs')}
  ${item(c, 'apps', '/apps/index.html', 'Apps')}
  ${item(c, 'guides', '/guides/protocols/secure-scuttlebutt.html', 'Guides')}
</div>`

module.exports.docs = (c) => `<div class="tabs small">
  ${item(c, 'docs-basics', '/docs/basics/install-the-database.html', 'Basics')}
  ${item(c, 'docs-social', '/docs/social/update-your-profile.html', 'Social')}
  ${item(c, 'docs-advanced', '/docs/advanced/links.html', 'Advanced')}
  ${item(c, 'docs-message-types', '/docs/message-types/post.html', 'Message Types')}
  ${item(c, 'docs-config', '/docs/config/configure-scuttlebot.html', 'Config')}
</div>`

module.exports.apis = (c) => `<div class="tabs small">
  ${item(c, 'apis-scuttlebot', '/apis/scuttlebot/ssb.html', 'Scuttlebot')}
  ${item(c, 'apis-modules', '/apis/modules/ssb-client.html', 'Modules')}
  ${item(c, 'apis-pull-stream', '/apis/pull-stream/pull-stream.html', 'Pull Stream')}
  ${item(c, 'apis-community', '/apis/community/ssbify.html', 'Community')}
</div>`

module.exports.guides = (c) => `<div class="tabs small">
  ${item(c, 'guides-protocols', '/guides/protocols/secure-scuttlebutt.html', 'Protocols')}
  ${item(c, 'guides-social-feed-app', '/guides/social-feed-app/intro.html', 'Social Feed App')}
  ${item(c, 'guides-private-messaging-app', '/guides/private-messaging-app/intro.html', 'Private Messaging App')}
  ${item(c, 'guides-todo-list-app', '/guides/todo-list-app/intro.html', 'Todo List App')}
</div>`