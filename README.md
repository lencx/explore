# Explore

* [Deno](https://deno.land)
* [Vite](https://github.com/vitejs/vite)
* [tauri](https://github.com/tauri-apps/tauri)
* [Flutter](https://flutter.dev)

## Start

```bash
# command help
deno run --allow-read --allow-write cmd.ts [--update[=tree]]
```

```bash
[explore]
|- [backend]
|   |- [middleware] # service middleware
|   |- [routes] # handle routes
|   |- app.ts # service entry
|   `- deps.ts # dependency
|- [app] # explore app
|- [frontend]
|   `- index.html
|- [web] # (vite + react + dva)
|   |- public
|   |- src
|   `- ...
|- [dart_learn] # dart learning
|   `- ... # example
|- .env # config
`- ... # othere
```

## TODO

* [ ] APP: flutter
* [ ] Desktop: tauri
* [ ] Web: vite + react + dva

## Reference

* [Learn Deno: Chat app](https://aralroca.com/blog/learn-deno-chat-app)
* [Building beautiful UIs with Flutter](https://codelabs.developers.google.com/codelabs/flutter/#0)
