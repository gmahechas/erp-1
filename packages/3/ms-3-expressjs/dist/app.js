"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var middlewares_1 = __importDefault(require("./middlewares"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
app.use(body_parser_1.json());
app.use(middlewares_1.default);
app.use(routes_1.default);
exports.default = app;
