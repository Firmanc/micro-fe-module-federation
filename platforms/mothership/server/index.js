import path from 'path';
import express from 'express';

const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (_, res) => {
  const indexFile = path.resolve('./dist/client/index.html');

  return res.sendFile(indexFile);
});

app.use(express.static('./dist/client'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});