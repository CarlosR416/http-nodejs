import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World 55!');
  res.end();
}).listen(process.env.PORT);
