window.addEventListener('load', function () {
  setupTOC(document.querySelector('.table-of-contents'))
})

function setupTOC (toc) {
  // attach click handlers
  toc.querySelector('a').addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    toc.classList.add('expanded')
  })
  document.body.addEventListener('click', function () {
    toc.classList.remove('expanded')
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