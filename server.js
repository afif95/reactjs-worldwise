/* eslint-disable no-undef */
import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("./data/cities.json");
const middlewares = jsonServer.defaults();
const port = 5000;

server.use(middlewares);
server.use(router);

server.listen(port);
