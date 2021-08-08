"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./modules/country/routes"));
var routes_2 = __importDefault(require("./modules/estate/routes"));
var router = express_1.default.Router();
exports.default = [
    router.use('/country', routes_1.default),
    router.use('/estate', routes_2.default)
];
