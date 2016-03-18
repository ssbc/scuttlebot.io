var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'About messages',
  section: 'docs',
  tab: 'docs-message-types',
  path: '/docs/message-types/about.html',
  content: md.doc(__dirname+'/about.md'),
  seeAlso: [
    ['/docs/social/update-your-profile.html', 'Update your profile'],
    ['/docs/advanced/message-schemas.html', 'Message schemas'],
    ['/docs/advanced/linking-messages.html', 'Linking messages'],
    ['/apis/modules/ssb-msg-schemas.html', 'SSB-Msg-Schemas API']
  ],
  next: ['./contact.html', 'Contact']
})