import { 
    Box, 
    Text, 
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb, 
    HStack, 
    
} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import QuantButton from './QuantButton';
import { useRangeSlider } from '@chakra-ui/react';

const SortItemsMenu = () => {
    const [minQuantVal, setMinQuantVal] = useState(1);
    const [maxQuantVal, setMaxQuantVal] = useState(10);

    const handleUpdateSliderValues = values => {
        setMinQuantVal(values[0]);
        setMaxQuantVal(values[1]);
    }
    const handleChangeValue = (val: Number, type: String) => {
        switch (type) {
            case 'min': {
                if (val > maxQuantVal) return;
                setMinQuantVal(val);
                break;
            } case 'max': {
                if (val < minQuantVal) return;
                setMaxQuantVal(val);
                break;
            }
        }
    }
  return (
    <Box id='sort-box'>
        <Text fontSize='xl'>Sort</Text>
        <Text>Quantity</Text>
        <RangeSlider
            aria-label={['min', 'max']}
            value={[minQuantVal, maxQuantVal]}
            onChange={handleUpdateSliderValues}
        >
            <RangeSliderTrack>
                <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} children={minQuantVal} />
            <RangeSliderThumb index={1} children={maxQuantVal} />
        </RangeSlider>
        <HStack>
            {/* Min Val */}
            <QuantButton key='min' type='min' value={minQuantVal} minValue={1} maxValue={100} changeValue={handleChangeValue}/>
            {/* Max Val */}
            <QuantButton key='max' type='max' value={maxQuantVal} minValue={1} maxValue={100} changeValue={handleChangeValue} />
        </HStack>
    </Box>
  )
}

export default SortItemsMenu