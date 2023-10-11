const { createServer } = require("http");

let server = createServer((request, response) => {
  console.log('Request was received!', request.url);
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code> </p>
  `);
  response.end();
});

server.listen(8005);
console.log("Server started");
