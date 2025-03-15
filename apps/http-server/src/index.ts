import express from 'express';
import { client } from '@repo/db/client'

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!!');
});


app.post('/signup', async (req, res) => {
  console.log("🚀 ~ app.post ~ req:", req)
  const {
    email,
    password,
    name
  } = req.body;


  const data = await client.user.create({
    data: {
      email,
      password,
      name
    }
  })



  res.json({
    data,
    message: 'User created successfully'
  });
});


app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
