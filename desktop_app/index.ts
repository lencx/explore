import { WebView } from "https://deno.land/x/webview/mod.ts";

const sharedOptions = {
  width: 400,
  height: 200,
  resizable: true,
  debug: true,
  frameless: false,
};

const html = (n: number) =>
  `
  <html>
  <body>
    <h1>${n}</h1>
    <input />
    <button>send</button>
  </body>
  </html>
`;

const webview1 = new WebView({
  title: "Dchat",
  url: `data:text/html,${encodeURIComponent(html(1))}`,
  width: 400,
  height: 200,
  resizable: true,
  debug: true,
  frameless: false,
});

const webview2 = new WebView({
  title: "Dchat",
  url: `data:text/html,${encodeURIComponent(html(2))}`,
  width: 400,
  height: 200,
  resizable: true,
  debug: true,
  frameless: false,
});

await Promise.all([webview1.run(), webview2.run()]);