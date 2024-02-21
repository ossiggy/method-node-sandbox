import path from 'path';
import express from 'express';
import { PORT } from './config';
import { api_router } from './src';

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

app.use('/api', api_router);

app.listen(PORT, () => {
  console.log('App is listening on PORT:', PORT);
});