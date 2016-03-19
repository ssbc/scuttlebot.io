var page = require('../../page.part')
var md = require('../../../markdown')

module.exports = () => page({
  title: 'Sync via Wifi',
  section: 'docs',
  tab: 'docs-basics',
  path :'/docs/basics/sync-via-wifi.html',
  content: md.doc(__dirname+'/sync-via-wifi.md'),
  next: ['/docs/social/update-your-profile.html', 'Update your profile']
})
