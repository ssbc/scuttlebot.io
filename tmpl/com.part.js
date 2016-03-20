
// `examples` is an object, mapping language->example
module.exports.code = examples => {
  return `<div class="code-examples">
    <div class="head">
      ${ Object.keys(examples).sort(langPrioritySort).map(lang => `<div class="tab">${lang}</div>`).join('') }
    </div>
    <div class="body">
      ${ Object.keys(examples).sort(langPrioritySort).map(lang => `<pre><code class="language-${lang}">${cleanupCode(examples[lang])}</code></pre>`).join('') }
    </div>
  </div>`
}

module.exports.tableOfContents = items => {
  items = items
    .map(item => [item.children[0].url, item.children[1].value])
    .filter(item => item[0] && item[1])
  return `<div class="table-of-contents">
    <a href="#">Jump to section</a>
    <ul>
      ${ items.map(item => `<li><a href="${item[0]}">${item[1]}</a></li>`).join('') }
    </ul>
  </div>`
}

// enforce an order to the language tabs
function langPrioritySort (a, b) {
  if (b == 'bash' && a != 'bash')
    return 1
  return -1
}

// do some cleanup on the code
function cleanupCode (str) {
  return str.trim()
}