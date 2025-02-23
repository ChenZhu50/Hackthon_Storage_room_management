"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const QuantButton = ({ type, value, minValue, maxValue, changeValue }) => {
    return (<react_2.NumberInput value={value} size='sm' maxW={20} onChange={val => changeValue(val, type)} id='quant-field' min={minValue} max={maxValue} clampValueOnBlur={false}>
        <react_2.NumberInputField />
        <react_2.NumberInputStepper>
            <react_2.NumberIncrementStepper />
            <react_2.NumberDecrementStepper />
        </react_2.NumberInputStepper>
    </react_2.NumberInput>);
};
exports.default = QuantButton;
