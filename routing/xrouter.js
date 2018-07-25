import { parse } from 'url';
import routes from './routes.json';

const SEGMENT_TYPES = {
  LEXEME: 'LEXEME',
  PARAMETER: 'PARAMETER',
};

const paramRegexPattern = '([A-Za-z0-9-_#$~%]+)';
const singleParamRegex = /\[(\w+)\]/;   // -> Not /g(lobal)
const paramsRegex = /\[(\w+)\]/g;       // -> /g(lobal) 
const slashRegex = /\//g;
const slashRegexPattern = '\\/';

function getRegexFromPattern(pattern) {
  const rex = pattern
    .replace(slashRegex, slashRegexPattern)
    .replace(paramsRegex, paramRegexPattern);

  return `^${rex}/?$`;
}

function getSegmentsFromPattern(pattern) {
  const tokens = pattern.split('/').filter(token => token.length > 0);
  const segments = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const currentSegment = {
      position: i,
    };

    if (singleParamRegex.test(tokens[i])) {
      const [, paramName] = singleParamRegex.exec(tokens[i]);
      currentSegment.type = SEGMENT_TYPES.PARAMETER;
      currentSegment.label = paramName;
    } else {
      currentSegment.type = SEGMENT_TYPES.LEXEME;
      currentSegment.label = tokens[i];
    }

    segments.push(currentSegment);
  }

  return segments;
}

function extractParams(url, segments) {
  const params = {};

  const urlSegments = url.split('/').filter(token => token.length > 0);

  const paramSegments = segments.filter(
    s => s.type === SEGMENT_TYPES.PARAMETER,
  );

  paramSegments.forEach(paramSegment => {
    params[paramSegment.label] = urlSegments[paramSegment.position];
  });

  return params;
}

function parseRoutes() {
  return routes.map(r => ({
    ...r,
    regex: new RegExp(getRegexFromPattern(r.pattern)),
    segments: getSegmentsFromPattern(r.pattern),
  }));
}

const parsedRoutes = parseRoutes();

function processRoute(url) {

    const parsedUrl = parse(url, true);

    console.log('parsed: ', parsedUrl);

    const { pathname, query } = parsedUrl;

  const matched = parsedRoutes.filter(r => r.regex.test(pathname));

  if (matched.length > 0) {

    const selectedRoute = matched[0];

    const routeResult = {
      ...selectedRoute,
      params: { ...query, ...extractParams(url, selectedRoute.segments)},
    };

    return routeResult;
  }

  // No match, Sad tinder panda 8( -> Hope NextJS will handle it...
  return null;
}

export default {
  processRoute,
};
