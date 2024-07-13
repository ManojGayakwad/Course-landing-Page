import React from 'react';
import { Box, Flex, Image, Divider, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box position="relative" bg="white" color="black" fontFamily="arial" >
      <Flex align="center" justify="space-between" p={{ base: "2px", md: "4px" }} width={{ base: "100%", md: "100%" }}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
          <Image src="./logo12.jfif" alt="Left Image" ml={{ base: "0px", md: "60px" }} />
          <Text fontSize={{base:"12px", md:"20px"}} textAlign="center" ml={{base:"4px", md:"60px"}} mt="-15px">ExpertPLM Technologies</Text>
        </Box>
        <Divider orientation="vertical" borderColor="gray.300" borderWidth="0.2px" />

        {/* <Image src="./logo2.webp" alt="Right Image" mr={{ base: "0px", md: "60px" }} width={{ base: "80%", md: "22%" }} /> */}
        <Box  width={{base:"100%", md:"40%"}} textAlign="center">
          <Text fontSize={{base:"20px", md:"30px"}} fontWeight="500" color="#009a9a">SIEMENS Authorised Training Partner</Text>
          <Text fontSize={{base:"18px", md:"36px"}} fontWeight="600" fontFamily="Copperplate Gothic Bold">(Teamcenter PLM)</Text>
        </Box>
      </Flex>
    </Box>
  );
};


export default Navbar;
