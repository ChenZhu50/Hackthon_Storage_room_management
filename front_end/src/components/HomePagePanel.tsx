import React from 'react';
import {
  Box,
  VStack,
  Text,
  Link,
} from '@chakra-ui/react';

const HomePagePanel: React.FC = () => {
  return (
    <Box width="250px" padding="4" bg="gray.100" borderRightWidth="1px">
      <VStack spacing={4} align="start">
        {/* About Section */}
        <Text fontWeight="bold" fontSize="sm">About</Text>
        <Text fontSize="sm">
        A club storage management system is a software solution designed to help clubs and organizations efficiently manage their storage resources. Our goal is to optimize storage use, improve efficiency, control inventory, and enhance member satisfaction. It allows users to track and organize items stored in a central location, such as equipment, supplies, or personal belongings. Key features typically include inventory tracking, item check-in and check-out functionalities, user access controls, and reporting tools to monitor usage and availability. By streamlining the storage process, the system enhances operational efficiency, reduces the risk of loss or misplacement, and improves overall resource management for clubs and their members.
        </Text>
        <Link href="https://github.com/ChenZhu50/Hackthon_Storage_room_management" isExternal color="teal.500">
          Learn more here!
        </Link>
      </VStack>
    </Box>
  );
};

export default HomePagePanel;
