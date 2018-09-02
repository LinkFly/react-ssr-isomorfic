import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import template from './client/template';
import App from './components/App';

var app = express();

app.get('/client-part.js', (req, res) => {
  fs.readFile(path.join('public', 'client-part.js'), 'utf8', (err, content) => {
    if (err) throw err;
    res.send(content);
  });
});

app.use((req, res) => {
  return res.end(
    template({
      body: renderToString(<App />)
    })
  )
});

var port = 3001;
app.listen(port, () => {console.log(`Ok. Server listen post ${port}`)});


