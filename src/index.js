import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import api from './routes';

let app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.use('/api', api);

app.set('port', 8080);
http.createServer(app).listen(app.get('port'));
console.log(`Ready on port ${app.get('port')}`);

export default app;
