/* eslint no-console: "off" */
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
// import { processRoute } from './router/biRouter';
// import handleImageRequest from './router/handleImageRequest';
// import handleFileRequest from './router/handleFileRequest';
// import handleRequestConfirmation from './router/handleRequestConfirmation';
// import handleRequestDenial from './router/handleRequestDenial';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // const parsedUrl = parse(req.url, true);
    // const { pathname, query } = parsedUrl;
    // const routeResult = processRoute(pathname, query, null, { req, res });

    // if (routeResult) {
    //   app.render(req, res, routeResult.target, routeResult.query);
    // } else if (pathname.startsWith('/confirm/')) {
    //   handleRequestConfirmation(req, res, parsedUrl);
    // } else if (pathname.startsWith('/deny/')) {
    //   handleRequestDenial(req, res, parsedUrl);
    // } else if (pathname.startsWith('/image/')) {
    //   handleImageRequest(req, res, parsedUrl);
    // } else if (pathname.startsWith('/file/')) {
    //   handleFileRequest(req, res, parsedUrl);
    // } else if (routeResult !== false) {
    //   handle(req, res, parsedUrl);
    // }
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/a') {
      app.render(req, res, '/b', query);
    } else if (pathname === '/b') {
      app.render(req, res, '/a', query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`AulaDerma listening on http://localhost:${port}`);
  });
});
