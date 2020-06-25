/**
 * @author: lencx
 * @create_at: Jun 01, 2020
 */

import { WebSocket, isWebSocketCloseEvent, v4 } from '../deps.ts';

const users = new Map<string, WebSocket>();

function broadcast(message: string, senderId?: string): void {
  if (!message) return;
  for (const user of users.values()) {
    // Send message
    user.send(senderId ? `💭 [${senderId}]: ${message}` : message);
  }
}

async function chat(ws: WebSocket): Promise<void> {
  const userId = v4.generate();

  const _user = `[👤${userId}]`;

  // 🟢: Register user connection
  users.set(userId, ws);
  broadcast(` 🟢 ${_user} is connected`);

  for await (const event of ws) {
    const message = typeof event === 'string' ? event : '';

    broadcast(message, userId);

    // 🔴: Unregister user connection
    if (!message || isWebSocketCloseEvent(event)) {
      users.delete(userId);
      broadcast(`🔴 ${_user} is disconnected`);
      break;
    }
  }
}

export default async function handleChat(ctx: any) {
  // handle webSockets: https://github.com/oakserver/oak/pull/137
  const sock = await ctx.upgrade();
  chat(sock);
}