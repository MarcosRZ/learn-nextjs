import routes from './routes.json';

const paramRegexPattern = '([A-Za-z0-9-_#$~%]+)';
const paramRegex = /\[\w+\]/g;
const slashRegex = /\//g;
const slashRegexPattern = '\\/';

function getRegexFromPattern(pattern) {
  return pattern
    .replace(slashRegex, slashRegexPattern)
    .replace(paramRegex, paramRegexPattern)
    .concat('$');
}

function parseRoutes() {
  return routes.map(r => ({
    ...r,
    regex: new RegExp(getRegexFromPattern(r.pattern)),
  }));
}

const parsedRoutes = parseRoutes();

console.log('PARSED ROUTES: ', parsedRoutes);

function processRoute(parsedUrl) {

  const matched = parsedRoutes.filter(r => r.regex.test(parsedUrl.pathname));

  // if (!matched.length) {

  //   console.error(`[X-ROUTER]:> No match for route ${parsedUrl.pathname}`);
  // } 
  // if (!matched.length) console.error(`[X-ROUTER]:> Route ${url} does not match! :(`);

  // if (matched.length > 1) console.warn(`[X-ROUTER]:> Route ${url} matches more than one pattern! :S ${matched}`);

  // console.info(`[X-ROUTER]:> ${url} Perfect match! :)`, matched[0]);

  return matched[0];
}

export default {
  processRoute,
};
