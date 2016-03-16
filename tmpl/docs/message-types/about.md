## About

About-messages set attributes about someone or something.
They can be used to set a name or picture for users, files, or messages.
However, they're most commonly published about users.

About messages do not have to have both `name` and `image`, and, in fact, it's recommended that they only have one or the other.
Why?
Because then a `vote` on the message can be more specific.

```js
{ type: 'about', about: Link, name: String, image: BlobLink }
```

### Names

There's no global registry of names.
Each user can choose a name for themselves and for others, and conflicts are allowed.

Its up to your application to decide which names to use.
Generally speaking, names by followed users are trusted, and the local user gets to override all decisions.

A common rule for names is to allow `A-z0-9._-`, and not allow a trailing `.`.

### Images

For images, a common size is 512x512.
Square images are recommended but not required.

Some recommended (but not required) attributes on the `image` link:

 - `width` in pixels
 - `height` in pixels
 - `name` a string filename
 - `size` in bytes
 - `type` a mimetype

