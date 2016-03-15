# mdmanifest

Uses a regular markdown form to produce muxrpc manifests and cli usage descriptions.

The form:

```markdown
# api-name

Api short description.

Api long, multiline description (optional).
Api long, multiline description (optional).
Api long, multiline description (optional).

## method-name: type

Method short description.

```bash
bash usage (optional)
``` --

```js
js usage (optional)
``` --

Method long, multiline description (optional).
Method long, multiline description (optional).
Method long, multiline description (optional).
```

Example:

```markdown
# example-api

Example API, v1.0.0.

This is an example API, written by Paul Frazee.
It's not a real API, but it would work with muxrpc.

## ping: async

Pings a target machine.

```bash
ping {target string} [-n number]
``` --

```js
ping(target, { n: })
``` --

 - target: string, an IPv4/IPv6 address
 - opts:
   - n: optional number, how many times to ping

Sends ICMP ping messages to the given target.
Will wait 1 second between pings.

## listen: source

Listens for pings.

```bash
listen
``` --

```js
listen()
``` --

Will emit a string describing incoming pings, as they occur.
```

The api:

```js
var mdm = require('mdmanifest')

mdm.muxrpcManifest(exampleMd)
/* => {
  ping: 'async',
  listen: 'source'
}*/

mdm.usage(exampleMd) 
/* => 
Example API, v1.0.0.

This is an example API, written by Paul Frazee.
It's not a real API, but it would work with muxrpc.

Commands:

 - ping    Pings a target machine.
 - listen  Listens for pings.
*/

mdm.usage(exampleMd, { prefix: 'foo' })
/* => 
Example API, v1.0.0.

This is an example API, written by Paul Frazee.
It's not a real API, but it would work with muxrpc.

Commands:

 - foo.ping    Pings a target machine.
 - foo.listen  Listens for pings.
*/

mdm.usage(exampleMd, { nameWidth: 20 }) 
/* => 
Example API, v1.0.0.

This is an example API, written by Paul Frazee.
It's not a real API, but it would work with muxrpc.

Commands:

 - ping                Pings a target machine.
 - listen              Listens for pings.
*/

mdm.usage(exampleMd, 'ping')
/* =>
Pings a target machine.

ping {target string} [-n number]

-   target: string, an IPv4/IPv6 address
-   opts:
    -   n: optional number, how many times to ping

Sends ICMP ping messages to the given target.
Will wait 1 second between pings.
*/

mdm.html(exampleMd) // standard HTML output
```

Command-line usage:

```bash
$ ./mdm.js manifest ./test/valid-example.md 
{
  "ping": "async",
  "listen": "source"
}

$ ./mdm.js html ./test/valid-example.md 
<h1>example-api</h1>
<p>Example API, v1.0.0.</p>
...

$ ./mdm.js usage ./test/valid-example.md 
Example API, v1.0.0.

This is an example API, written by Paul Frazee.
It's not a real API, but it would work with muxrpc.

Commands:
  ping    Pings a target machine.
  listen  Listens for pings.

$ ./mdm.js usage ./test/valid-example.md ping
Pings a target machine.

ping {target string} [-n number]

-   target: string, an IPv4/IPv6 address
-   opts:
    -   n: optional number, how many times to ping

Sends ICMP ping messages to the given target.
Will wait 1 second between pings.
```

[View on Github](https://github.com/ssbc/mdmanifest)
