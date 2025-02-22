import { useState } from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormControl,
  FormLabel,
  Button,
} from '@chakra-ui/react';

interface FormInputProps {
  id: string;
  label: string;
  icon: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  id,
  label,
  icon,
  type = 'text',
  placeholder,
  value,
  onChange
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputStyles = {
    size: 'lg',
    bg: 'gray.50',
    border: '1px solid',
    borderColor: 'gray.200',
    color: 'gray.900',
    _hover: { borderColor: 'gray.300' },
    _focus: { 
      borderColor: 'blue.500', 
      bg: 'white',
      color: 'gray.900'
    },
    _placeholder: { color: 'gray.900' },
    pl: '2.5rem'
  };

  return (
    <FormControl>
      <FormLabel 
        htmlFor={id}
        color="gray.700"
        fontSize="sm"
        fontWeight="medium"
      >
        {label}
      </FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          h="100%"
          display="flex"
          alignItems="center"
          children={
            <span 
              className="material-symbols-outlined"
              style={{ 
                color: '#1A202C',
                marginLeft: '8px'
              }}
            >
              {icon}
            </span>
          }
        />
        <Input
          id={id}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...inputStyles}
        />
        {type === 'password' && (
          <InputRightElement h="100%">
            <Button
              variant="ghost"
              onClick={() => setShowPassword(!showPassword)}
              style={{ color: '#1A202C' }}
            >
              <span className="material-symbols-outlined">
                {showPassword ? 'visibility_off' : 'visibility'}
              </span>
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};

export default FormInput; 