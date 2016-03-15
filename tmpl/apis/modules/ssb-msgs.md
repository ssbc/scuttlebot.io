# ssb-msgs

Message-processing tools for secure-scuttlebutt

```js
var mlib = require('ssb-msgs')
```

### indexLinks

```js
mlib.indexLinks(
  msg: Object,
  {
    rel: optional String
    msg: optional Bool|String
    feed: optional Bool|String
    ext: optional Bool|String
  },
  each: Function(link: Object, rel: String)
)
```

Traverses a message and runs the `each` function on all found links. All `opts` fields are optional. `Opts` may also be a string, in which case it is the rel attribute.

```js
// assume %msgid and @feedid a well-formed
var msg = {
  foo: { link: '%msgid' },
  bar: [{ link: '@feedid' }]
}
function print (obj, rel) {
  console.log(rel, obj.link)  
}
mlib.indexLinks(msg, print)
// => foo %msgid
// => bar @feedid
mlib.indexLinks(msg, 'foo', print)
// => foo %msgid
mlib.indexLinks(msg, { rel: 'foo' }, print)
// => foo %msgid
mlib.indexLinks(msg, { feed: true }, print)
// => bar @feedid
mlib.indexLinks(msg, { feed: '@feedid' }, print)
// => bar @feedid
```

### links

```js
links(obj: Any, [requiredAttr: String])
```

Helper to get links from a message in a regular array form.

```js
var msg = {
  foo: { link: '%msgid' },
  bar: [{ link: '@feedid' }]
}
mlib.links(msg.foo) // => [{ link: '%msgid' }]
mlib.links(msg.bar) // => [{ link: '@feedid' }]
mlib.links(msg.bar, 'feed') // => [{ link: '@feedid' }]
mlib.links(msg.bar, 'msg') // => []
mlib.links(msg.baz) // => []
```

### link

```js
link(obj: Any, [requiredAttr: String])
```

Helper to get a link from a message in a regular object form. If an array is found, will use the first element.

```js
var msg = {
  foo: { link: '%msgid' },
  bar: [{ link: '@feedid' }]
}
mlib.link(msg.foo) // => { link: '%msgid' }
mlib.link(msg.bar) // => { link: '@feedid' }
mlib.link(msg.bar, 'feed') // => { link: '@feedid' }
mlib.link(msg.bar, 'msg') // => null
mlib.link(msg.baz) // => null
```

### isLink

```js
isLink(obj: Any, [requiredAttr: String])
```

Predicate to test whether an object is a well-formed link. Returns false if given an array.

```js
var msg = {
  foo: { link: '%msgid' },
  bar: [{ link: '@feedid' }]
}
mlib.isLink(msg.foo) // => true
mlib.isLink(msg.bar) // => true
mlib.isLink(msg.bar, 'feed') // => true
mlib.isLink(msg.bar, 'msg') // => false
mlib.isLink(msg.baz) // => false
```

### linksTo

```js
linksTo(a: Message, b: Message)
```

Get link objects pointing from `a` to `b`.

```js
mlib.linksTo(msgA, msgB) // => [{ link: '%msgB-id' }]
```

### relationsTo

```js
relationsTo(a: Message, b: Message)
```

Get relations of links pointing from `a` to `b`.

```js
mlib.relationsTo(msgA, msgB) // => ['fooRelation']
```

[View on Github](https://github.com/ssbc/ssb-msgs)