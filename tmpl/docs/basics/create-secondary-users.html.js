var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Create secondary users',
  section: 'docs',
  tab: 'docs-basics',
  path :'/docs/basics/create-secondary-users.html',
  content: md.doc(__dirname+'/create-secondary-users.md'),
  seeAlso: [
    ['/apis/modules/ssb-feed.html', 'SSB-Feed API'],
    ['/apis/modules/ssb-keys.html', 'SSB-Keys API']
  ],
  next: ['/docs/basics/encryption.html', 'Encrypt messages']
})