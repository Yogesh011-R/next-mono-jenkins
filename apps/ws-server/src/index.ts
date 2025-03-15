import { WebSocketServer } from 'ws';
import { client } from '@repo/db/client'


const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', async function connection(ws) {
  console.log("🚀 ~ connection ~ ws:", ws)
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  await client.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      password: 'password',
    },
  })

  ws.send('something');
});