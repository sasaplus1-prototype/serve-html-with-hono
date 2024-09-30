import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

app.get('/ping', (c) => c.text('pong'));

serve(app);

// curl http://localhost:3000/ping
