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
const react_1 = require("@chakra-ui/react");
const react_2 = __importStar(require("react"));
const QuantButton_1 = __importDefault(require("./QuantButton"));
const SortItemsMenu = () => {
    const [minQuantVal, setMinQuantVal] = (0, react_2.useState)(1);
    const [maxQuantVal, setMaxQuantVal] = (0, react_2.useState)(10);
    const handleUpdateSliderValues = values => {
        setMinQuantVal(values[0]);
        setMaxQuantVal(values[1]);
    };
    const handleChangeValue = (val, type) => {
        switch (type) {
            case 'min': {
                if (val > maxQuantVal)
                    return;
                setMinQuantVal(val);
                break;
            }
            case 'max': {
                if (val < minQuantVal)
                    return;
                setMaxQuantVal(val);
                break;
            }
        }
    };
    return (<react_1.Box id='sort-box'>
        <react_1.Text fontSize='xl'>Sort</react_1.Text>
        <react_1.Text>Quantity</react_1.Text>
        <react_1.RangeSlider aria-label={['min', 'max']} value={[minQuantVal, maxQuantVal]} onChange={handleUpdateSliderValues}>
            <react_1.RangeSliderTrack>
                <react_1.RangeSliderFilledTrack />
            </react_1.RangeSliderTrack>
            <react_1.RangeSliderThumb index={0} children={minQuantVal}/>
            <react_1.RangeSliderThumb index={1} children={maxQuantVal}/>
        </react_1.RangeSlider>
        <react_1.HStack>
            {/* Min Val */}
            <QuantButton_1.default key='min' type='min' value={minQuantVal} minValue={1} maxValue={100} changeValue={handleChangeValue}/>
            {/* Max Val */}
            <QuantButton_1.default key='max' type='max' value={maxQuantVal} minValue={1} maxValue={100} changeValue={handleChangeValue}/>
        </react_1.HStack>
    </react_1.Box>);
};
exports.default = SortItemsMenu;
