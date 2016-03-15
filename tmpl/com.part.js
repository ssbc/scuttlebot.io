
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

// enforce an order to the language tabs
function langPrioritySort (a, b) {
  if (b == 'js' && a != 'js')
    return 1
  return -1
}

// do some cleanup on the code
function cleanupCode (str) {
  return str.trim()
}