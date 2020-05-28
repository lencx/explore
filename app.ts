import { serve } from "https://deno.land/std/http/server.ts";
import { config } from 'https://deno.land/x/dotenv/mod.ts';
import clc from 'https://deno.land/x/color/index.ts';

const port = parseInt(config()['PORT']);

const server = serve({ port });
console.info(clc.blue.text(`\nhttp://localhost:${port}\n`));

const url = 'https://hn.algolia.com/api/v1/search?query=deno';

for await (const req of server) {
  const res = await fetch(url).then(res => res.json());
  req.respond({ body: JSON.stringify(res.hits) });
}
