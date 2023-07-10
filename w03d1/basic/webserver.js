const http = require('http');
const port = 3000;

const server = http.createServer((request, response) => {
  // console.log('request', request);
  console.log('request.url', request.url);
  console.log('request.method', request.method);

  const route = `${request.method} ${request.url}`;
  console.log('route', route);

  switch (route) {
    case 'GET /':
      response.write('homepage');
      response.end();
      break;
    case 'GET /monkeyfuzz':
      response.write('<h1>monkey fuzz forever!</h1><a href="http://example.com" target="_blank">click here</a>');
      response.end();
      break;
    default:
      response.write('404 NOT FOUND');
      response.end();
      break;
  }

});

server.listen(port, () => {
  console.log(`Server is listening on port=${port}`);
});
