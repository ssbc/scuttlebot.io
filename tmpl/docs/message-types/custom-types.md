## Custom Types

Message schemas are interpretted according to the `type` attribute, as demonstrated in the other pages of this section.

There is no restriction on which types applications use.
A `type` simply must be a string between 3 and 52 characters long.
You are free to create new types, with their own schemas, as you need them.

Likewise, there is no restriction on message schemas, so long as the content is an object, and the total message size (including headers) is less than 8kb.

### Interoperation

Applications should interpret messages "defensively."
There's nothing enforcing a schema, so (as with any input) applications must be prepared for malformed `content` objects in messages.

Applications should endeavor to interpret messages the same way.
Otherwise, they won't be able to interoperate, and may introduce unexpected behaviors.

There is no official mechanism for making sure message-types interoperate, except for the documentation which you're reading here.
As it becomes clear that new types are coming into common use, we'll add them to this site.

### Namespacing

To avoid accidental collisions with other applications, it's a good idea to add your org or application name (or both!) to the message type.
We recommend: `{org}-{app}-{type}`, or `{app}-{type}` if you think your app has a very unique name.