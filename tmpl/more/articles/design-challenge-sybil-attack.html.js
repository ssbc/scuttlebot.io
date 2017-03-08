var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Design Challenge: Sybil Attacks',
  section: 'more',
  tab: 'more-articles',
  canonicalUrl: 'https://www.scuttlebutt.nz/stories/design-challenge-sybil-attacks.html',
  path: '/more/articles/design-challenge-sybil-attack.html',
  content: md.doc(__dirname+'/design-challenge-sybil-attack.md')
})