# ssb-ref

Check if a string is a valid ssb-reference.

``` js
var ref = require('ssb-ref')

// Check if a string is a valid ref
ref.isLink(str)

// Check if a string is a feed id
ref.isFeedId(str)

// Check if a string is a message id
ref.isMsgId(str)

// Check if a string is a blob id
ref.isBlobId(str)

// Get the type of the reference
ref.type(str) == 'feed'
ref.type(str) == 'msg'
ref.type(str) == 'blob'
ref.type('not-a-link') == false

// Extract a ref out of a url
// (Url-encoding is supported)
ref.extract(url)
 == '%pGzeEydYdHjKW1iIchR0Yumydsr3QSp8+FuYcwVwi8Q=.sha256'
```

[View on Github](https://github.com/ssbc/ssb-ref)