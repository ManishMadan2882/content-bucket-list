
import jsonServer from "json-server"


const server = jsonServer.create();
const router = jsonServer.router("./db.json");


const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
 jsonServer.rewriter({
  "/api/*": "/$1",
 })
);
server.use(router);

server.listen(3000, () => {
 console.log("JSON Server is running");
});

// Export the Server API
export default server;