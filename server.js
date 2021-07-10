import jsonServer from 'json-server'

const server = jsonServer.create();

const Router = jsonServer.router('data.json');

const middleWare = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(Router);
server.use(middleWare);

server.listen(PORT)
