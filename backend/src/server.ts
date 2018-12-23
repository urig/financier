import restify from "restify";

function respond(req: restify.Request, res: restify.Response, next: restify.Next) {
    res.send("hello " + req.params.name);
    next();
}

const server = restify.createServer();
server.get("/hello/:name", respond);

server.listen(8080, () => {
    // tslint:disable-next-line:no-console
    console.log("%s listening at %s", server.name, server.url);
});
