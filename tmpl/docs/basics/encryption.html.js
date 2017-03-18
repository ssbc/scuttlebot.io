var page = require('../../page.part')
var md = require('../../../markdown')

module.exports = () => page({
  title: 'Encryption',
  section: 'docs',
  tab: 'docs-basics',
  path :'/docs/basics/encryption.html',
  content: md.doc(__dirname+'/encryption.md'),
  seeAlso: [
    ['/more/protocols/private-box.html', 'Private Box Protocol'],
    ['/apis/scuttlebot/private.html', 'Scuttlebot.Private API']
  ],
  next: ['/docs/basics/sync-via-wifi.html', 'Sync via Wifi']
})