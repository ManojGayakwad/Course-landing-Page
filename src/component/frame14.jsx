import React, { useState, useEffect } from 'react';
import { Box, Text, Divider, Image, useMediaQuery, Icon, Button } from '@chakra-ui/react';
import { CheckCircleIcon, CalendarIcon } from '@chakra-ui/icons';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Frame14 = ({ onOpen }) => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
    return (
        <Box position="relative" background="#003399" p={4} color="white" display="flex" fontFamily="arial" justifyContent="space-around" flexDir={{base:"column", md:"row"}} >
            {/* <Divider borderColor="gray.300" /> */}
            <Box>
                <Box fontSize={{base:"15px", md:"18px"}} textAlign={{base:"center", md:"justify"}} mt={10}>
                    <Text>Contact:+91-9975001439</Text>
                    <Text>Address:Bavdhan,Pune,MAHARASHTRA</Text>
                    <Text>E-MAIL US:info@expertplmtechnologies.com</Text>
                    <Text>Visit On: www.expertplm.com/www.expertplmtechnologies.com</Text>
                </Box>

            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column " >
                {/* <Text fontSize={{ base: "20px", md: "30px" }} textAlign="center" display="flex" fontFamily="GT Sectra Fine" mb={5} justifyContent="center" fontWeight="700">Elevate your career with this programme!</Text> */}
                {/* <Text display="flex" fontSize={{ base: "15px", md: "18px" }} justifyContent="center" textAlign="center">
                        Flexible payment options available.View payment plan
                    </Text> */}
                <Box display="flex" justifyContent="center"  mt={4}>
                    <Icon as={CalendarIcon} w={{ base: 5, md: 7 }} h={{ base: 5, md: 7 }} color="white" mr={2} />
                    <Text  fontSize={{ base: "15px", md: "20px" }} fontWeight="700">
                        Starts On 19<sup>st</sup> August 2024
                    </Text>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" mt={2} >
                    <Button variant="outline" bgColor="#349fd2" color="white" p={6} fontSize={{ base: "15px", md: "20px" }} _hover={{ color: "black", background: "white" }} onClick={onOpen}>APPLY NOW</Button>
                </Box>
            </Box>
            <Box ml={{base:"80px", md:"initial"}}>
                <a href="https://www.linkedin.com/in/expertplm-technologies/"><Box display="flex" alignItems="center"  flexDirection="row" width="100%" mt={4} >
                    <Icon as={FaLinkedinIn} w={{ base: 5, md: 7 }} h={{ base: 5, md: 7 }}  mr={2} />
                    <Text fontSize={{ base: "15px", md: "20px" }} >
                        Linkedin
                    </Text>

                </Box>
                </a>
                <a href="https://www.instagram.com/expertplm_technologies_pune?igsh=enZrMGNuNTdsbXpm"><Box display="flex"  alignItems="center"  flexDirection="row" width="100%" mt={4} >
                    <Icon as={FaInstagram} w={{ base: 5, md: 7 }} h={{ base: 5, md: 7 }} mr={2} />
                    <Text fontSize={{ base: "15px", md: "20px" }} >
                        Instagram
                    </Text>

                </Box>
                </a>
                <a href="//youtube.com/@expertplmtechnologies5163?si=CZ5i40SROr6doud1"><Box display="flex"  alignItems="center"  flexDirection="row" width="100%" mt={4}>
                    <Icon as={FaYoutube} w={{ base: 5, md: 7 }} h={{ base: 5, md: 7 }} mr={2} />
                    <Box>
                    <Text  fontSize={{ base: "15px", md: "20px" }} >
                        Youtube
                    </Text>
                    </Box>    
                </Box>
                </a>
            </Box>
        </Box >
    );
}

export default Frame14;
