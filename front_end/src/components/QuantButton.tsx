import React from 'react'
import { NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from '@chakra-ui/react'

const QuantButton = ({ type, value, minValue, maxValue, changeValue }) => {
  return (
    <NumberInput
        value={value}
        size='sm'
        maxW={20}
        onChange={val => changeValue(val, type)}
        id='quant-field'
        min={minValue}
        max={maxValue}
        clampValueOnBlur={false}
    >
        <NumberInputField />
        <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
        </NumberInputStepper>
    </NumberInput>
  )
}

export default QuantButton