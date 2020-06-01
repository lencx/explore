/**
 * @author: lencx
 * @create_at: Jun 02, 2020
 */

import { WebView } from "https://deno.land/x/webview/mod.ts";

const sharedOptions = {
  width: 400,
  height: 400,
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
    <button onclick="alert(${n})">send</button>
  </body>
  </html>
`;

const webview1 = new WebView({
  title: "Dchat",
  url: `data:text/html,${encodeURIComponent(html(1))}`,
  ...sharedOptions,
});

const webview2 = new WebView({
  title: "Dchat",
  url: `data:text/html,${encodeURIComponent(html(2))}`,
  ...sharedOptions,
});

await Promise.all([webview1.run(), webview2.run()]);