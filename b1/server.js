const { createServer } = require("http");

let server = createServer((request, response) => {
  console.log('Request was received!', request.url);
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`
    <h1>Hello Luxembourg sastav!</h1>
  `);
  response.end();
});

server.listen(8080, "0.0.0.0")
console.log('Listening to port:  ' + 8080);
