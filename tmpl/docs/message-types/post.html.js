var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Post messages',
  section: 'docs',
  tab: 'docs-message-types',
  path: '/docs/message-types/post.html',
  content: md.doc(__dirname+'/post.md'),
  seeAlso: [
    ['/docs/advanced/message-schemas.html', 'Message schemas'],
    ['/docs/advanced/linking-messages.html', 'Linking messages'],
    ['/apis/modules/ssb-msg-schemas.html', 'SSB-Msg-Schemas API']
  ],
  next: ['./about.html', 'About']
})