var page = require('../page.part')
var com = require('../com.part')

module.exports = () => page({
  tab: 'basics',
  path: '/basics/read-a-file.html',
  content: `
    <p>
      When Scuttlebot finds the hash-ID of a file in a message, it will request its contents from the network.
      You can then read the file from the blobstore.
    </p>

    <h2>Wait for the file to arrive</h2>
    ${ com.code({ js: jsSnippet1, bash: bashSnippet1 }) }

    <h2>Read a file to memory</h2>
    ${ com.code({ js: jsSnippet2, bash: bashSnippet2 }) }
    
    <h2>Read a file to disk</h2>
    ${ com.code({ js: jsSnippet3, bash: bashSnippet3 }) }

    <p class="next"><a href="/basics/encryption.html">Encryption</a></p>
    <ul class="see-also">
      <li><a href="/modules/scuttlebot-blobs.html">Scuttlebot.Blobs API</a></li>
      <li><a href="/advanced/linking-messages.html">Linking messages</a></li>
      <li><a href="/advanced/pull-streams.html">Pull streams</a></li>
    </ul>
  `
})

var jsSnippet1 = `
// want will not cb() until the file arrives
sbot.blobs.want(hash, function (err) {
  // ready to read
})
`

var bashSnippet1 = `
$ sbot blobs.want "&hT/5N2Kgbdv3...XYCA=.sha256"
`

var jsSnippet2 = `
var pull = require('pull-stream')
pull(
  sbot.blobs.get(hash),
  pull.collect(function (err, values) {
    // eg values.join('') == 'hello, world'
  })
)
`

var bashSnippet2 = `
$ sbot blobs.get "&hT/5N2Kgbdv3...XYCA=.sha256"
hello, world
`

var jsSnippet3 = `
var fs = require('fs')
var pull = require('pull-stream')
var toPull = require('stream-to-pull-stream')
pull(
  sbot.blobs.get(hash),
  toPull.sink(fs.createWriteStream('./hello.txt'), cb)
)
`

var bashSnippet3 = `
$ sbot blobs.get "&hT/5N2Kgbdv3...XYCA=.sha256" > ./hello.txt
`