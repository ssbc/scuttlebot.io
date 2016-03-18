var page = require('../../page.part')
var com = require('../../com.part')

module.exports = () => page({
  title: 'Update your profile',
  section: 'docs',
  tab: 'docs-social',
  path :'/docs/social/update-your-profile.html',
  content: `
    <p>
      Each user has a profile, comprised of data published by the user and by other users.
      The profile content is controlled by <code>type:about</code> messages.
    </p>

    <h2>Set a petname</h2>
    <p>
      Users can publish petnames for self and others.
    </p>
    ${ com.code({ js: jsSnippet1, bash: bashSnippet1 }) }

    <h2>Set a profile pic</h2>
    <p>
      Users can publish pictures for self and others.
      First, <a href="/docs/basics/publish-a-file.html">add the image file to the blobstore.</a>
      Then, publish this message with the output hash.
    </p>
    ${ com.code({ js: jsSnippet2, bash: bashSnippet2 }) }

    <p class="next"><a href="/docs/social/view-a-profile.html">View a profile</a></p>
    <ul class="see-also">
      <li><a href="/docs/basics/publish-a-file.html">Publish a file</a></li>
      <li><a href="/advanced/message-schemas.html">Message schemas</a></li>
      <li><a href="/advanced/linking-messages.html">Linking messages</a></li>
    </ul>
  `
})

var jsSnippet1 = `
sbot.publish({
  type: 'about',
  about: userId,
  name: name
}, cb)
`

var bashSnippet1 = `
sbot publish --type about --about {userId} --name {name}
`

var jsSnippet2 = `
sbot.publish({
  type: 'about',
  about: userId,
  image: {
    link: hash,         // required
    width: widthInPx,   // optional, but recommended
    height: heightInPx, // optional, but recommended
    name: fileName,     // optional, but recommended
    size: sizeInBytes,  // optional, but recommended
    type: mimeType      // optional, but recommended
  }
}, cb)
`

var bashSnippet2 = `
sbot publish --type contact --contact {userId} --no-following
`