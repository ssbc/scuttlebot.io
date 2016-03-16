# pull-otherwise

Read from an alternative source, if the main ended.

## Usage

### otherwise(alt);

`alt` - Alternative source stream.

## Example

```js
var pull = require("pull-stream");
var otherwise = require("pull-otherwise");

var mainSource = pull.values([1,2,3,4]);
var alternative = pull.values([5,6,7,8,9]);

pull(
  mainSource,
  otherwise(alternative),
  pull.log()
)
```

## install

With [npm](https://npmjs.org) do:

```
npm install pull-otherwise
```

## license

MIT