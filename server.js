// const express = require('express');
// const { renderToNodeStream } = require('react-dom/server');
// const { StaticRouter } = require('react-router-dom');
// const { matchRoutes } = require('react-router-config');
// const { SitemapStream, streamToPromise } = require('sitemap');
// const routes = require('./src/routes');

import express from 'express';
// import { renderToNodeStream } from 'react-dom/server';
// import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { SitemapStream, streamToPromise } from 'sitemap';
import routes from './src/routes.js';

const app = express();

app.get('/sitemap.xml', (req, res) => {
  const sitemap = new SitemapStream({ hostname: 'https://solis.lighting' }); // https://solis.lighting/#/home
  console.log(req);
  

  matchRoutes(routes, req.path).map(({ route }) => {
    sitemap.write({ url: route.path, changefreq: 'monthly', priority: 0.7 });
  });

  sitemap.end();
  streamToPromise(sitemap).then((sm) => {
    res.header('Content-Type', 'application/xml');
    res.send(sm);
  });
});

app.listen(5173, (err) => {
  console.log('Server started on port 5173', err ? `Error: ${err}` : '');
});
