var jetpack = require('fs-jetpack')

var tmpl = jetpack.cwd('tmpl')
var build = jetpack.cwd('build')

// iterate ./tmpl tree
// run any template scripts (.html.js and .css.js)
// and output the result to ./build (.html and .css)
// ignore any partials (.part.js)
// copy all other files
tmpl.find('.', { matching: '*' }, 'inspect')
  .forEach(entry => {
    // console.log(entry)
    if (entry.type == 'dir') {
      // copy folder structure
      // console.log('copying directory')
      build.dir(entry.relativePath)
    } else if (entry.type == 'file') { 
      if (entry.name.indexOf('.html.js') !== -1 || entry.name.indexOf('.css.js') !== -1) {
        // build html/css files
        // console.log('building')
        buildTemplate(entry)
      } else if (entry.name.indexOf('.part.js') !== -1) {
        // skip partials
        // console.log('skipping')
        return
      } else {
        // copy all others
        // console.log('copying', entry.absolutePath, entry.relativePath)
        jetpack.copy(entry.absolutePath, build.path(entry.relativePath), { overwrite: true })
      }
    }
  })

function buildTemplate (entry) {
  var template = require(entry.absolutePath)
  var path = entry.relativePath.slice(0, -3) // remove the '.js'
  build.write(path, template())
}