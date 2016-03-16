# patchwork-threads

```js
var threadlib = require('patchwork-threads')

// get the ID of the root message of the thread for any given msg id
threadlib.fetchThreadRootID (ssb, mid, cb)

// get full thread structure
// `opts` used in fetchThreadData
threadlib.getPostThread (ssb, mid, opts, cb)

// get full thread structure, starting possibly from a reply
// `opts` used in fetchThreadData
threadlib.getParentPostThread (ssb, mid, opts, cb)

// get a flattened msg-list of the thread, ready for rendering
threadlib.flattenThread (thread)

// get top-level thread structure (no replies of replies)
// `opts` used in fetchThreadData
threadlib.getPostSummary (ssb, mid, opts, cb)

// get top-level thread structure (no replies of replies), starting possibly from a reply
// `opts` used in fetchThreadData
threadlib.getParentPostSummary (ssb, mid, opts, cb)

// fetch & compute data related to the given thread
// - opts.isRead: attach isread data
// - opts.isBookmarked: attach isBookmarked data
// - opts.votes: compute votes data
threadlib.fetchThreadData (ssb, thread, opts, cb)

// helpers to iterate a thread
threadlib.iterateThread (thread, maxDepth, fn)
threadlib.iterateThreadAsync (thread, maxDepth, fn, cb)

// helpers used in fetchThreadData
threadlib.attachThreadIsread (ssb, thread, maxdepth, cb)
threadlib.attachThreadIsbookmarked (ssb, thread, maxdepth, cb)
threadlib.compileThreadVotes (thread)

// mark all unread msgs in the thread as read
threadlib.markThreadRead (ssb, thread, cb)

// decrypt the msgs in the thread, if not yet decrypted
threadlib.decryptThread (ssb, thread, cb)

// get the last type:post msg in the thread
threadlib.getLastThreadPost (thread)
```