"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
//For env File 
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
const db = mongoose_1.default.connect('mongodb://127.0.0.1:27017/SustainableShare').catch(err => console.log(err));
app.get('/', (req, res) => {
    res.send('Welcome to Express & TypeScript Server');
});
app.use('/users', users_routes_1.default);
const server = app.listen(port, () => {
    console.log(`Server is live  at http://localhost:${port}`);
});
process.on('SIGINT', () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.close().then(res => console.log("Database instance disconnected.")).catch(err => console.log(err));
    server.close(() => console.log('Server closed'));
}));
