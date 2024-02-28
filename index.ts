import path from 'path';
import express from 'express';
import { PORT, CLIENT_URL } from './config';
import { api_router } from './src';

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", CLIENT_URL);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

app.use('/api', api_router);

app.listen(PORT, () => {
  console.log('App is listening on PORT:', PORT);
});