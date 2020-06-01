# Dchat

* [Deno](https://deno.land)

## Start

```bash
# see: https://github.com/denosaurs/denon
# Monitor any changes in your Deno application and automatically restart
deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts

# run application
# run the browser
denon run --allow-net --allow-read backend/app.ts

# see: https://github.com/eliassjogreen/deno_webview
# run the desktop
denon run -A -r --unstable desktop_app/index.ts
```

## Reference

* [Learn Deno: Chat app](https://aralroca.com/blog/learn-deno-chat-app)