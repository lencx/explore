/**
 * @author: lencx
 * @create_at: Jun 01, 2020
 * @cmd: deno run --allow-net --allow-read backend/app.ts
 */

import { Application, Router, dotEnvConfig } from './deps.ts';
import handleHtml from './routes/html.ts';
import handleChat from './routes/chat.ts';

const app = new Application();
const router = new Router();
const env = dotEnvConfig();

const port = +env.PORT || 6300;
const host = env.HOST || 'localhost';

app.use(router.routes());
app.use(router.allowedMethods());

router
  .get('/', handleHtml) // render home page
  .get('/ws', handleChat); // webSocket

app.addEventListener('listen', ({ secure, hostname, port }) => {
  const protocol = secure ? 'https' : 'http';
  const url = `${protocol}://${hostname ?? host}:${port}`;
  console.log(`🚀 ${url}`);
});

await app.listen({ port });
