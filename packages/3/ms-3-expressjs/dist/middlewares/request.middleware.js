"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (request, response, next) {
    request.irequest = ({
        headers: request.headers,
        body: request.body,
        params: request.params,
        query: request.query
    });
    next();
});
