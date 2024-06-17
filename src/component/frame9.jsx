import React, { useState, useEffect } from 'react';
import { Box, Text, Divider, Image, useMediaQuery, Icon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';


const Frame9 = () => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
    return (
        <Box position="relative" display="flex" p={{ base: 4, md: 10 }} fontFamily="arial" justifyContent="center" alignItems="center"  flexDirection="column">
            <Divider borderColor="gray.300" />
            <Text fontSize={{ base: "24px", md: "40px" }} mt={{ base: 0, md: 10 }} display="flex" justifyContent="center" fontFamily="GT Sectra Fine" fontWeight="700">Past Participant Profiles</Text>
            <Box display="flex" flexDirection={{base:"column", md:"row"}} justifyContent={{base:"center", md:"initial"}} alignContent="center" p={5} gap={{base:10, md:"initial"}}>
                <Box >
                    <Text fontSize={{ base: "16px", md: "18px" }} fontWeight='700' >Work Experience</Text>
                    <Image src="./bar.webp" alt="bargraph" width="60%" ml="60px" />
                </Box>
                <Box >
                    <Text fontSize={{ base: "16px", md: "18px" }} fontWeight='700' >Top Industry</Text>
                    <Box display="flex"  width="100%" mt={4}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300"   mr={2}/>
                        <Text textAlign={{ base: "initial", md: "initial" }} fontSize={{ base: "15px", md: "18px" }}>
                            IT/ Computers 
                        </Text>
                    </Box>
                    <Box display="flex" width="100%"  mt={4}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300"  mr={2} />
                        <Text textAlign={{ base: "initial", md: "initial" }} fontSize={{ base: "15px", md: "18px" }}>
                            Banking                        </Text>
                    </Box>
                    <Box display="flex"  width="100%"  mt={4}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300"  mr={2} />
                        <Text textAlign={{ base: "initial", md: "initial" }} fontSize={{ base: "15px", md: "18px" }}>
                            Financial Services

                        </Text>
                    </Box>
                    <Box display="flex"  width="100%" mt={4} >
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300"   mr={2} />
                        <Text textAlign={{ base: "initial", md: "initial" }} fontSize={{ base: "15px", md: "18px" }}>
                            Healthcare

                        </Text>
                    </Box>
                    <Box display="flex"  width="100%" mt={4}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300"   mr={2} />
                        <Text textAlign={{ base: "initial", md: "initial" }} fontSize={{ base: "15px", md: "18px" }}>
                            Consumer Products/Retail
                        </Text>
                    </Box>

                </Box>
                
            </Box>
        </Box>
    );
}

export default Frame9;
