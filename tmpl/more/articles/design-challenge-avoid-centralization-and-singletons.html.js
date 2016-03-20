var md = require('../../../markdown')
var page = require('../../page.part')
module.exports = () => page({
  title: 'Design Challenge: Avoid Centralization and Singletons',
  section: 'more',
  tab: 'more-articles',
  path: '/more/articles/design-challenge-avoid-centralization-and-singletons.html',
  content: md.doc(__dirname+'/design-challenge-avoid-centralization-and-singletons.md')
})