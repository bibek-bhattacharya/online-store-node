"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http = require("http");
const port = 5000;
app_1.default.set('port', port);
const server = http.createServer(app_1.default);
server.listen(port);
server.on('listening', function () {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
});
module.exports = app_1.default;
//# sourceMappingURL=index.js.map