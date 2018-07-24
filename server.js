/* eslint no-console: "off" */
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import Router from './routing/x-router';
import { APP_NAME, APP_AUTHOR, AUTHOR_GITHUB } from './config/app';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

function logBootInfo() {
  console.log('- - - - - - - - - - - - - - - - - - - - -');
  console.log(' ');
  console.log(`${APP_NAME} @ http://localhost:${port}`);
  console.log(' ');
  console.log(`${APP_AUTHOR} | ${AUTHOR_GITHUB}`);
  console.log(' ');
  console.log('- - - - - - - - - - - - - - - - - - - - -');
}

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);

    const { pathname, query } = parsedUrl;

    const target = Router.processRoute(parsedUrl);

    if (target) {
      console.log('[SERVER]:> Target -> ', target, query);
      app.render(req, res, target.target, query);
    } else {
      console.info('No X Route for: ', pathname);
      app.getRequestHandler()(req, res, parsedUrl);
    }
  }).listen(port, err => {
    if (err) throw err;
    logBootInfo();
  });
});

