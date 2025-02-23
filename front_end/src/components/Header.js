"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const UserState_1 = require("./UserState");
const Header = () => {
    const { loggedIn } = (0, UserState_1.useUser)();
    return (<section className='header'>
        <react_2.Text fontSize='4xl'>SustainableShare</react_2.Text>
        {loggedIn ? (null // TODO
        ) : (<div id='buttons-group'>
                <react_2.Button>Log In</react_2.Button>
                <react_2.Button>Sign Up</react_2.Button>
            </div>)}
    </section>);
};
exports.default = Header;
