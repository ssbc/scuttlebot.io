# muxrpcli

Command-line interface to [muxrpc](https://github.com/ssbc/muxrpc) servers.
Works by converting the command-line parameters into args for the RPC calls.
Also adds some standard behaviors for usage calls.

**Standard Switches**:

 - `--oneline` put json output on one line.
 - `-h / --help` usage.

## CLI Parameters

Parameters are parsed with [minimist](https://www.npmjs.com/package/minimist).
The first positional param is mapped to the rpc command.
Any subsequent positional params are passed as arguments.
Then, the object constructed by the named parameters (if there are any) is passed as the last argument.

Examples:

```bash
$ program command arg1 arg2
invokes server.command("arg1", "arg2")

$ program command -a beep -b boop
invokes server.command({ a: "beep", b: "boob" })

$ program command arg1 arg2 -a beep -b boop
invokes server.command("arg1", "arg2", {
  a: "beep",
  b: "boob"
})

$ program command -a beep -b boop arg1 arg2 
invokes server.command("arg1", "arg2", {
  a: "beep",
  b: "boob"
})
```

If a stream is supplied to stdin, it will be parsed as JSON and used instead of the CLI parameters.

```bash
$ echo '{"a":"beep","b":"boop"}' | program command
invokes `server.command({ a: "beep", b: "boob" })'
```


## Usage calls

Usage-calls are the help which is output when a command fails, or when help is requested.
They are used in the following situations:

 - If the command does not exist in the RPC server's manifest, does a top-level usage call.
 - If the command responses with a `TypeError`, `UsageError`, `BadParamError`, or `BadArgError`, does a usage call for that command.
 - If the `-h` or `--help` switches are given, does a toplevel or command usage call.

A usage-call is a call to the `usage(cmd)` function on the RPC server.
A 'top-level' usage call will leave `cmd` falsey.
The `usage` method should return a string to display.


## Example rpc server

```js
var zerr = require('zerr')
var MissingArgError = zerr('BadArg', '"%" is required')
var BadTypeError = zerr('BadArg', '"%" must be a valid %')

var manifest = {
  usage: 'sync',
  whoami: 'sync',
  ping: 'async'
}
var api = {}
// muxrpc(null, manifest)(api) is called

api.usage = function (cmd) {
  switch (cmd) {
    case 'whoami':
      return 'whoami. get your profile info.'
    case 'ping':
      return 'ping {target} [-n times]. '+
             'send `n` pings to `target`, defaults to 1'
  }
  return [
    'myexample usage:'
    ' - ' + api.usage('whoami'),
    ' - ' + api.usage('ping')
  ].join('\n')
}

api.whoami = function() { return 'bob, obviously' }

api.ping = function(target, opts, cb) {
  if (!target) return cb(MissingArgError('target'))
  if (!isAddress(target))
    return cb(BadTypeError('target', 'address'))
  
  var n = 1
  if (opts && opts.n) {
    n = +opts.n
    if (isNaN(n)) return cb(BadTypeError('n', 'number'))
  }

  // ...
}
```

Here's how a session would behave with this server:

```bash
$ myexample
myexample usage:
 - whoami. get your profile info.
 - ping {target} [-n times]. send `n` pings to `target`.
defaults to 1

$ myexample whoami -h
whoami. get your profile info.

$ myexample ping -h
ping {target} [-n times]. send `n` pings to `target`.
defaults to 1

$ myexample whoami
bob, obviously

$ myexample ping 127.0.0.1
...

$ myexample ping 1123123123
[BadArgError: "target" must be a valid address]
ping {target} [-n times]. send `n` pings to `target`.
defaults to 1


$ myexample ping 127.0.0.1 -n foobar
[BadArgError: "n" must be a valid number]
ping {target} [-n times]. send `n` pings to `target`.
defaults to 1
```

[View on Github](https://github.com/ssbc/muxrpcli)