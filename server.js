'use strict';

let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');
let webpack = require('webpack');
let config = require('./webpack.config');

let isValidWord = require('./src/libs/isValidWord');

let app = express();
let compiler = webpack(config);

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/valid', (req, res) => {
  res.send(isValidWord(req.body.word));
});

app.listen(app.get('port'), 'localhost', err => {
  if (err) throw err;
  console.log('Listening on port ' + app.get('port'));
});

