import React, { useState, useEffect } from 'react';
import { Box, Text, Divider, Image, useMediaQuery, Icon, Button } from '@chakra-ui/react';
import { CheckCircleIcon, CalendarIcon } from '@chakra-ui/icons';


const Frame14 = ({onOpen}) => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
    return (
        <Box position="relative" background="#003399" p={4} color="white" display="flex" fontFamily="arial" justifyContent="center" alignItems="center" flexDirection="column">
            {/* <Divider borderColor="gray.300" /> */}
            <Box  >
                <Box display="flex" justifyContent="center" flexDirection="column " p={1} >
                    <Text fontSize={{ base: "20px", md: "30px" }} textAlign="center" display="flex" fontFamily="GT Sectra Fine" mb={5} justifyContent="center" fontWeight="700">Elevate your career with this programme!</Text>
                    <Text display="flex" fontSize={{ base: "15px", md: "18px" }} justifyContent="center" textAlign="center">
                        Flexible payment options available.View payment plan
                    </Text>
                    <Box display="flex" justifyContent="center" width="100%" mt={4}>
                        <Icon as={CalendarIcon} w={{ base: 5, md: 7 }} h={{ base: 5, md: 7 }} color="white" mr={2} />
                        <Text textAlign={{ base: "initial", md: "initial" }} fontSize={{ base: "15px", md: "20px" }} fontWeight="700">
                            Starts On June 26, 2024
                        </Text>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" mt={2} >
                        <Button variant="outline" bgColor="#003399" color="white" p={6} fontSize={{ base: "15px", md: "20px" }} _hover={{ color: "black", background: "white" }} onClick={onOpen}>START APPLICATION NOW</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Frame14;
