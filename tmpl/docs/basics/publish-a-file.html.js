var page = require('../../page.part')
var com = require('../../com.part')

module.exports = () => page({
  section: 'docs',
  tab: 'docs-basics',
  path :'/docs/basics/publish-a-file.html',
  content: `
    <p>
      To publish a file, you must first add it to Scuttlebot${"'"}s blob-store.
      Then, you announce the file by publishing its hash-ID in a message.
    </p>

    <h2>Add a file from memory</h2>
    ${ com.code({ js: jsSnippet1, bash: bashSnippet1 }) }
    
    <h2>Add a file from disk</h2>
    ${ com.code({ js: jsSnippet2, bash: bashSnippet2 }) }
    
    <h2>Publish the file to the network</h2>
    <p>Adding a file will only affect the local blobstore. To distribute the file, you must also link to it in an unencrypted message.</p>
    ${ com.code({ js: jsSnippet3, bash: bashSnippet3 }) }

    <p class="next"><a href="/docs/basics/read-a-file.html">Read a file</a></p>
    <ul class="see-also">
      <li><a href="/modules/scuttlebot-blobs.html">Scuttlebot.Blobs API</a></li>
      <li><a href="/advanced/linking-messages.html">Linking messages</a></li>
      <li><a href="/advanced/pull-streams.html">Pull streams</a></li>
    </ul>
  `
})

var jsSnippet1 = `
var pull = require('pull-stream')
pull(
  pull.values('hello, world'),
  sbot.blobs.add(function (err, hash) {
    // 'hash' is the hash-id of the blob
  })
)
`

var bashSnippet1 = `
$ echo "hello, world" | sbot blobs.add
&hT/5N2Kgbdv3IsTr6d3WbY9j3a6pf1IcPswg2nyXYCA=.sha256
`

var jsSnippet2 = `
var fs = require('fs')
var pull = require('pull-stream')
var toPull = require('stream-to-pull-stream')
pull(
  toPull.source(fs.createReadStream('./hello.txt')),
  sbot.blobs.add(function (err, hash) {
    // 'hash' is the hash-id of the blob
  })
)
`

var bashSnippet2 = `
$ cat ./hello.txt | sbot blobs.add
&hT/5N2Kgbdv3IsTr6d3WbY9j3a6pf1IcPswg2nyXYCA=.sha256
`

var jsSnippet3 = `
sbot.publish({
  type: 'post',
  text: 'checkout [this file!]('+hash+')',
  mentions: [{
    link: hash,        // the hash given by blobs.add
    name: 'hello.txt', // optional, but recommended
    size: 12,          // optional, but recommended
    type: 'text/plain' // optional, but recommended
  }]
}, function (err, msg) {
  // ...
})
`

var bashSnippet3 = `
$ sbot publish --type post --text "checkout this file!" \\
  --mentions.link "&hT/5N2Kgbdv3IsT...swg2nyXYCA=.sha256" \\
  --mentions.name "hello.txt" \\
  --mentions.size 12 \\
  --mentions.type "text/plain"
`