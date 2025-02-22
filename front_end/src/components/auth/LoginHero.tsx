import { GridItem, Image, Text } from '@chakra-ui/react';
import lighthouse from '../../assets/loginpage.jpg';

const LoginHero = () => {
  return (
    <GridItem
      position="relative"
      display={{ base: 'none', lg: 'block' }}
    >
      <Image
        src={lighthouse}
        alt="Lighthouse"
        objectFit="cover"
        h="100%"
      />
      <Text
        position="absolute"
        bottom="4"
        left="4"
        color="white"
        fontSize="sm"
      >
        Photo by Alexandr Podvalny
      </Text>
    </GridItem>
  );
};

export default LoginHero; 