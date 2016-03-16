var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  section: 'docs',
  tab: 'docs-message-types',
  path: '/docs/message-types/pub.html',
  content: md.doc(__dirname+'/pub.md'),
  seeAlso: [
    ['/docs/advanced/message-schemas.html', 'Message schemas'],
    ['/docs/advanced/linking-messages.html', 'Linking messages'],
    ['/apis/modules/ssb-msg-schemas.html', 'SSB-Msg-Schemas API']
  ],
  next: ['./custom-types.html', 'Custom Types']
})