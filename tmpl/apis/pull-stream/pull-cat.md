# pull-cat

concatinate pull-streams

# example

``` js
var cat = require('pull-cat')
var pull = require('pull-stream')
cat([pull.values([1,2,3]), pull.values([4,5,6])])
  .pipe(...)
```

Reads from the each stream until it is finished.
If a stream errors, stop all the streams.

## License

MIT
