var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Pub messages',
  section: 'docs',
  tab: 'docs-message-types',
  path: '/docs/message-types/pub.html',
  content: md.doc(__dirname+'/pub.md'),
  seeAlso: [
    ['/docs/message-types/custom-types.html', 'Message schemas'],
    ['/docs/advanced/links.html', 'Linking messages'],
    ['/apis/modules/ssb-msg-schemas.html', 'SSB-Msg-Schemas API']
  ],
  next: ['./custom-types.html', 'Custom Types']
})