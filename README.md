# Dchat

* [Deno](https://deno.land)

## Start

```bash
# see: https://github.com/denosaurs/denon
# Monitor any changes in your Deno application and automatically restart
# deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts

# run the browser
denon run --allow-net --allow-read backend/app.ts
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
|- .env # config
`- ... # othere
```

## TODO

* [ ] Use `flutter` to develop APP

## Reference

* [Learn Deno: Chat app](https://aralroca.com/blog/learn-deno-chat-app)
