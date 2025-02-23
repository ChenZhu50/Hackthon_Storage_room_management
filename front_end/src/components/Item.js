"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_router_dom_1 = require("react-router-dom");
const Item = ({ id }) => {
    return (<react_router_dom_1.Link to={`/items/${id}`}>
        <react_2.Box className='club-item'>
            <img className='item-image' src='https://www.ikea.com/us/en/images/products/ikea-365-plate-white__0712377_pe728796_s5.jpg?f=s'/>
            <react_2.Text fontSize="xl">Plates</react_2.Text>
            <react_2.Text fontSize="lg">Debate Club</react_2.Text>
            <react_2.Text>100</react_2.Text>
        </react_2.Box>
    </react_router_dom_1.Link>);
};
exports.default = Item;
