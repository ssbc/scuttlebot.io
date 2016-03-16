# ssb-markdown

render patchwork/ssb messages to markdown.

[patchwork](https://github.com/ssbc/patchwork) has a few changes from
standard markdown.

* emoji - everybody hearts emoji
* ssb links - links to cryptographic objects see [ssb-ref](https://github.com/ssbc/ssb-ref)
* mentions - @mentions like on twitter or github. mentions allow people to convieniently talk to each other, but are written as both the name used, plus the cryptographic reference.

## api

```
var md = require('ssb-markdown')
```

### md.block(source, mentions)

Render raw markdown `source` to html.
The output will be html content without a surrounding tag.
`mentions` is an array of [ssb-links](https://github.com/ssbc/ssb-links)
If a `@NAME` matches a mention link to `{name: NAME, link: @PUBKEY }`
then that mention will be rendered as a link to `@PUBKEY`.

### md.inline (source)

Render raw markdown to a single line of test,
suitable for a one line preview that is opened
to a view rendered with `block`.

## License

MIT
