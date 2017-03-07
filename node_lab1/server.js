import config from './config';
import express from 'express';
import greeting  from './greeting'

const server = express();

server.get('/', (req, res) => {
  const language = req.headers['accept-language'];
  const resp_language = greeting[language]?language:'en';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Language', resp_language);
  res.send(greeting[resp_language]);
});

//server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
