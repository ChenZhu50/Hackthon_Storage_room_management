"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ItemPage = () => {
    const itemId = (0, react_router_dom_1.useParams)();
    const [itemObject, setItemObject] = (0, react_2.useState)(null);
    return (<main className='club-item-page'>
      <img className='item-image' src='https://www.ikea.com/us/en/images/products/ikea-365-plate-white__0712377_pe728796_s5.jpg?f=s'/>
      <react_1.Divider />
      <react_1.Text fontSize='4xl'>Plates</react_1.Text>
      <react_1.Text fontSize='xl'>These are typical plates, we have like 100 of them, so come pick it up.</react_1.Text>
      <react_1.Text fontSize='xl'>Quantity: 100</react_1.Text>
      <react_1.Text fontSize='xl'>From: Debate Club</react_1.Text>
    </main>);
};
exports.default = ItemPage;
