
// `examples` is an object, mapping language->example
module.exports.code = examples => {
  return `<div class="code-examples">
    <div class="head">
      ${ Object.keys(examples).map(lang => `<div class="tab">${lang}</div>`).join('') }
    </div>
    <div class="body">
      ${ Object.keys(examples).map(lang => `<pre><code class="language-${lang}">${examples[lang].trim()}</code></pre>`).join('') }
    </div>
  </div>`
}