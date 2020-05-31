/**
 * @author: lencx
 * @create_at: Jun 01, 2020
 */

import { listenAndServe } from 'https://deno.land/std/http/server.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';
import clc from 'https://deno.land/x/color/index.ts';
import { acceptable, acceptWebSocket } from 'https://deno.land/std/ws/mod.ts';

import { chat } from './chat.ts';

const port = parseInt(config()['PORT']);

listenAndServe({ port }, async (req) => {
  if (req.method === 'GET' && req.url === '/') {
    req.respond({
      status: 200,
      headers: new Headers({ 'Content-Type': 'text/html' }),
      body: await Deno.open('./frontend/index.html')
    });
  }

  // WebSocket chat
  if (req.method === 'GET' && req.url === '/ws') {
    if (acceptable(req)) {
      acceptWebSocket({
        conn: req.conn,
        bufReader: req.r,
        bufWriter: req.w,
        headers: req.headers,
      }).then(chat);
    }
  }
})

console.info('\n🚀', clc.blue.text(`http://localhost:${port}`), '\n');