# Current version

Please see:
https://git.scuttlebot.io/%25hg8wG6xCDKVWoPYCS84HY7Adrd6JEUYoM23%2BGwn24I4%3D.sha256
`ssb://%hg8wG6xCDKVWoPYCS84HY7Adrd6JEUYoM23+Gwn24I4=.sha256`

---

# :warning: Deprecated version :

# Scuttlebot.io

Source/assets for https://scuttlebot.io

## Build

```
npm install
npm run build
```

Auto-build watcher:

```
npm run watch
```

Then point your server at `./build` to serve.

## Build process

index.js will iterate `./tmpl`, run any templates, and copy output to `./build`.

### Templates

Templates are `.html.js` and `.css.js` files in `./tmpl`.

Template files should export a single function, which outputs the html/css.

### Partials

Partials are `.part.js` files in `./tmpl`.

They are ignored by the build process.

### Static assets

All other files are directly copied from `./tmpl` to `./build`.