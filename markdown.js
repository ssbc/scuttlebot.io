var fs = require('fs')
var remark = require('remark')
var html = require('remark-html')
var com = require('./tmpl/com.part')

module.exports.doc = function (path) {
  var text = fs.readFileSync(path, 'utf-8')
  return remark()
    .use(html)
    .use(transformCodeExamples)
    .process(text)
}

// find any <code> sections and group them together into our code-examples component
function transformCodeExamples (remark, options) {
  remark.Compiler.prototype.visitors.codeExamples = renderCodeExamples
  return ast => {
    var groups = findCodeGroupings(ast)
    createCodeExamples(ast, groups)
    return ast
  }
}

// locate the contiguous <code> groupings
function findCodeGroupings (ast) {
  var groups = [], groupStart = false
  ast.children.forEach((node, i) => {
    if (groupStart) {
      // in a grouping, look for a non-code item
      if (node.type !== 'code' || !node.lang) {
        groups.push([groupStart, i])
        groupStart = false
      }
    } else {
      // not in a grouping, look for a code item
      if (node.type === 'code' && node.lang) {
        groupStart = i
      }
    }
  })
  if (groupStart)
    groups.push([groupStart, groupStart+1])
  return groups
}

// replace <code> groupings with code-example nodes
function createCodeExamples (ast, groups) {
  var offset = 0 // offset to counter the changes introduced by splices
  groups.forEach(group => {
    var start = group[0], end = group[1]
    var len = end - start
    ast.children.splice(start-offset, len, {
      type: 'codeExamples',
      children: ast.children.slice(start-offset, start-offset+len),
      position: false // TODO - what is this?
    })
    offset += len - 1
  })
}

// convert from AST to html
function renderCodeExamples (node, ast) {
  var codes = {}
  node.children.forEach(node => {
    if (node.type == 'code' && !!node.lang)
      codes[node.lang] = node.value
  })

  return com.code(codes)
}
