"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const HomePagePanel = () => {
    return (<section className='panel'>
        <react_1.Text>Test</react_1.Text>
        <react_1.Button>Supposed to do things</react_1.Button>
    </section>);
};
exports.default = HomePagePanel;
