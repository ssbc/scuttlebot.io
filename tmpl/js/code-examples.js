window.addEventListener('load', function () {
  Array.prototype.forEach.call(document.querySelectorAll('.code-examples'), setupCodeExample)
})

function setupCodeExample (codeExamples) {
  // select the current code example
  selectTab(codeExamples, 1)
  // attach click handlers
  Array.prototype.forEach.call(codeExamples.querySelectorAll('.tab'), function (tab, n) {
    tab.addEventListener('click', selectTab.bind(null, codeExamples, (n+1)))
  })
}

function selectTab (el, n) {
  // deselect current
  try { el.querySelector('pre.current').classList.remove('current') } catch (e) {}
  try { el.querySelector('.tab.current').classList.remove('current') } catch (e) {}
  // select new
  el.querySelector('pre:nth-child('+n+')').classList.add('current')
  el.querySelector('.tab:nth-child('+n+')').classList.add('current')
}