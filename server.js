/* eslint no-console: "off" */
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import Router from './routing/x-router';
// import { processRoute } from './router/biRouter';
// import handleImageRequest from './router/handleImageRequest';
// import handleFileRequest from './router/handleFileRequest';
// import handleRequestConfirmation from './router/handleRequestConfirmation';
// import handleRequestDenial from './router/handleRequestDenial';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);

    const { pathname, query } = parsedUrl;

    const target = Router.processRoute(parsedUrl);



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

    // console.log('Parsed URL: ', parsedUrl);

    if (target) {
      console.log('[SERVER]:> Target -> ', target, query);
      app.render(req, res, target.target, query);
    } else {
      console.info('No X Route for: ', pathname);
      app.getRequestHandler()(req, res, parsedUrl);
    }


  }).listen(port, err => {
    if (err) throw err;
    console.log(`PIXEL SUSHI listening on http://localhost:${port}`);
  });
});
