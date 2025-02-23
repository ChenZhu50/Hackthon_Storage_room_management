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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Items_1 = __importDefault(require("./Items"));
const react_2 = require("@chakra-ui/react");
const SortItemsMenu_1 = __importDefault(require("./SortItemsMenu"));
const HomePageContent = () => {
    const [sortMenu, setSortMenu] = (0, react_1.useState)(false);
    return (<section id='home-content'>
      <div id='view-school'>
        <react_2.Text id='university-name' fontSize='2xl'>Stony Brook University</react_2.Text>
        <react_2.Input id='search-box' placeholder='Search' size='lg'/>
        <react_2.Button onClick={() => setSortMenu(!sortMenu)}>Sort</react_2.Button>
      </div>
      {sortMenu && (<SortItemsMenu_1.default />)}
      <Items_1.default />
    </section>);
};
exports.default = HomePageContent;
