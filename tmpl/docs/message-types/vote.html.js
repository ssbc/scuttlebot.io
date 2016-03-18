var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Vote messages',
  section: 'docs',
  tab: 'docs-message-types',
  path: '/docs/message-types/vote.html',
  content: md.doc(__dirname+'/vote.md'),
  seeAlso: [
    ['/docs/advanced/message-schemas.html', 'Message schemas'],
    ['/docs/advanced/linking-messages.html', 'Linking messages'],
    ['/apis/modules/ssb-msg-schemas.html', 'SSB-Msg-Schemas API']
  ],
  next: ['./pub.html', 'Pub']
})