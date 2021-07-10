const jsonServer = require('json-server')

const server = jsonServer.create();

const Router = jsonServer.router('data.json');

const middleWare = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(middleWare);
server.use(Router);

server.listen(PORT)
