/**
 * @author: lencx
 * @create_at: Jun 01, 2020
 */

import { WebSocket, isWebSocketCloseEvent } from 'https://deno.land/std/ws/mod.ts';
import { v4 } from 'https://deno.land/std/uuid/mod.ts';

const users = new Map<string, WebSocket>();

function broadcast(message: string, senderId?: string) {
  for (const user of users.values()) {
    // Send message
    user.send(senderId ? `💭 [${senderId}]: ${message}` : message);
  }
}

export async function chat(ws: WebSocket): Promise<void> {
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