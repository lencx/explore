import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({
  port: 6800,
});

console.info(`http://localhost:6800`);

for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}
