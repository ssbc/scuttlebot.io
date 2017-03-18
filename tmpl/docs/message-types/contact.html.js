var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Contact messages',
  section: 'docs',
  tab: 'docs-message-types',
  path: '/docs/message-types/contact.html',
  content: md.doc(__dirname+'/contact.md'),
  seeAlso: [
    ['/docs/message-types/custom-types.html', 'Message schemas'],
    ['/docs/advanced/links.html', 'Linking messages'],
    ['/apis/modules/ssb-msg-schemas.html', 'SSB-Msg-Schemas API']
  ],
  next: ['./vote.html', 'Vote']
})