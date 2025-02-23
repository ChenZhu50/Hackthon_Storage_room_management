"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const Layout_1 = __importDefault(require("./components/Layout"));
const UserState_1 = require("./components/UserState");
const HomePage_1 = __importDefault(require("./components/HomePage"));
const react_router_dom_1 = require("react-router-dom");
const ItemPage_1 = __importDefault(require("./components/ItemPage"));
function App() {
    return (<UserState_1.UserState>
      <Layout_1.default>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/items/:id" element={<ItemPage_1.default />}/>
          <react_router_dom_1.Route path="/" element={<HomePage_1.default />}/>
        </react_router_dom_1.Routes>
      </Layout_1.default>
    </UserState_1.UserState>);
}
exports.default = App;
