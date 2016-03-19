var fs = require('fs')
var remark = require('remark')
var html = require('remark-html')
var slug = require('remark-slug')
var autolinkHeadings = require('remark-autolink-headings')
var com = require('./tmpl/com.part')

const linkSvg = '<svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg>'

module.exports.doc = function (path) {
  var text = fs.readFileSync(path, 'utf-8')
  return remark()
    .use(slug)
    .use(autolinkHeadings, {
      attributes: { class: 'anchor' },
      template: linkSvg
    })
    .use(html)
    .use(injectTOC)
    .use(transformCodeExamples)
    .process(text)
}

// find all h2s and create a dropdown table-of-contents
function injectTOC (remark, options) {
  remark.Compiler.prototype.visitors.tableOfContents = renderTOC
  return ast => {
    var headings = ast.children.filter(node => node.type == 'heading' && node.depth == 2)
    if (headings.length > 3)
      createTOC(ast, headings)
    return ast
  }  
}

// add the tableOfContents node to the ast
function createTOC (ast, headings) {
  ast.children.unshift({ type: 'tableOfContents', children: headings })
}

// render the tableOfContents widget
function renderTOC (node, root) {
  return com.tableOfContents(node.children)
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
    groups.push([groupStart, ast.children.length])
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
      position: false // TODO - needed? doesnt look like it
    })
    offset += len - 1
  })
}

// convert from AST to html
function renderCodeExamples (node, root) {
  var codes = {}
  node.children.forEach(node => {
    if (node.type == 'code' && !!node.lang)
      codes[node.lang] = node.value
  })

  return com.code(codes)
}
