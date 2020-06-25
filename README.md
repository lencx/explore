# Dchat

* [Deno](https://deno.land)

## Start

```bash
# command
deno run --allow-read --allow-write cmd.ts [--update[=tree]]

# see: https://github.com/denosaurs/denon
# Monitor any changes in your Deno application and automatically restart
# deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts

# run the browser
denon run --allow-net --allow-read backend/app.ts

# run app
# cd app
flutter run
```

```bash
[dchat]
|- [backend]
|   |- [middleware] # service middleware
|   |- [routes] # handle routes
|   |- app.ts # service entry
|   `- deps.ts # dependency
|- [frontend]
|   `- index.html
|- [dart_learn] # dart learning
|   `- ... # example
|- .env # config
`- ... # othere
```

## TODO

* [ ] Use `flutter` to develop APP

## Reference

* [Learn Deno: Chat app](https://aralroca.com/blog/learn-deno-chat-app)
