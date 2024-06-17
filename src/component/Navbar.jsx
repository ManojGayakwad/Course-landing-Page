import React from 'react';
import { Box, Flex, Image, Divider } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box position="relative" bg="white" color="black" fontFamily="arial" >
      <Flex align="center" justify="space-between" p={{base:"2px", md:"4px"}} width={{ base: "55%", md: "100%" }}>
        <Image src="./logo.webp" alt="Left Image" ml={{ base: "0px", md: "60px" }} />
        
        <Divider orientation="vertical" borderColor="gray.300" borderWidth="0.2px" />

        <Image src="./logo2.webp" alt="Right Image" mr={{ base: "0px", md: "60px" }} width={{ base: "80%", md: "22%" }} />
      </Flex>
    </Box>
  );
};


export default Navbar;
