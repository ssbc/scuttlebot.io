var jetpack = require('fs-jetpack')

var tmpl = jetpack.cwd('tmpl')
var build = jetpack.cwd('build')

// iterate ./tmpl tree
tmpl.find('.', { matching: '*' }, 'inspect')
  .forEach(entry => {
    // console.log(entry)
    // ensure folders exist
    if (entry.type == 'dir')
      build.dir(entry.relativePath)
    else if (entry.type == 'file') { 
      // build html/css files
      if (entry.name.indexOf('.html.js') !== -1 || entry.name.indexOf('.css.js') !== -1)
        buildTemplate(entry)
      // skip partials
      else if (entry.name.indexOf('.part.js') !== -1)
        return
      // copy all others
      else
        jetpack.copy(entry.absolutePath, build.cwd(entry.relativePath))
    }
  })

function buildTemplate (entry) {
  var template = require(entry.absolutePath)
  var path = entry.relativePath.slice(0, -3) // remove the '.js'
  build.write(path, template())
}