"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HomePageContent_1 = __importDefault(require("./HomePageContent"));
const HomePagePanel_1 = __importDefault(require("./HomePagePanel"));
const HomePage = () => {
    return (<main id="home-page">
        <HomePagePanel_1.default />
        <HomePageContent_1.default />
    </main>);
};
exports.default = HomePage;
