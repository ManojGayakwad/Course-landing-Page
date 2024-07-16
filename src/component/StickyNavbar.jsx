import React, { useState, useEffect } from 'react';
import { Box, Divider, Flex, Text, Button, useMediaQuery } from '@chakra-ui/react';

const StickyNavbar = ({ onOpen }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            boxShadow={isSticky && isMediumScreen ? 'md' : 'none'}
            p={{ base: 4, md: 8 }}
            position={isSticky && isMediumScreen ? 'sticky' : 'relative'}
            top={0}
            background="#f4f4f4"
            color="black"
            fontFamily="arial"
            zIndex={1000}
        >
            <Flex flexDirection={{ base: "column", md: "row" }} gap={5}>
                <Box display="flex" flexDirection={{ base: "column", md: "row" }} gap={{ base: 18, md: 8 }}>
                    <Flex flexDirection="row" gap={{ base: 10, md: 10 }}>
                        <Box>
                            <Text fontSize="15px" textColor="#003399" fontWeight="bold">STARTS ON</Text>
                            <Text fontWeight="700" fontSize={{ base: "17px", md: "18px" }}>19<sup>st</sup> August 2024</Text>
                        </Box>
                        {isMediumScreen && (
                            <Box height="130px" position="relative" display="flex" alignItems="flex-end">
                                <Divider orientation="vertical" borderColor="gray" />
                            </Box>
                        )}
                    </Flex>
                    <Flex flexDirection="row" gap={{ base: 10, md: 10 }}>
                        <Box >
                            <Text fontSize="15px" textColor="#003399" fontWeight="bold">DURATION</Text>
                            <Text fontWeight="700" fontSize={{ base: "15px", md: "18px" }}>1 Year Full-Time</Text>
                            <Text fontWeight="700" fontSize={{ base: "15px", md: "16px" }}>(6 Months Training & 6 Months Project Internship)</Text>
                            {/* (6 months Training and 6 Months Projects Internship) */}
                            <Text textColor="#003399" fontWeight="bold">Training Mode:<span>Online and Offline</span></Text>
                        </Box>
                        {isMediumScreen && (
                            <Box height="130px" position="relative" display="flex" alignItems="flex-end">
                                <Divider orientation="vertical" borderColor="gray" />
                            </Box>
                        )}
                    </Flex>
                </Box>
                <Box display="flex" flexDirection="row" gap={{ base: 4, md: 8 }}>
                    {/* <Flex flexDirection="row" gap={{ base: 10, md: 10 }}> */}
                    {/* <Box>
                            <Text fontSize="13px">PROGRAMME FEE</Text>
                            <Text fontWeight="700" fontSize={{ base: "15px", md: "18px" }}>₹1,50,000</Text>
                            <Text>GST will be charged at checkout</Text>
                            <Text>View payment plan</Text>
                        </Box> */}
                    {/* {isMediumScreen && ( 
                        <Box height="130px" position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                        )}  */}
                    {/* </Flex> */}
                    <Flex flexDirection={{ base: "column", md: "row" }} gap={{ base: 5, md: 10 }}>
                        <Box>
                            <Text textColor="#003399" fontSize="15px" fontWeight="bold">ELLIGIBILITY</Text>
                            <Text fontWeight="700" fontSize={{ base: "15px", md: "18px" }}>B.E. in any branch</Text>
                            <Text fontWeight="700" fontSize={{ base: "15px", md: "18px" }}>M.Sc./ B. Sc.(Comp)</Text>
                            <Text fontWeight="700" fontSize={{ base: "15px", md: "18px" }}>MCA</Text>
                            {/* <Text fontWeight="700" fontSize={{ base: "15px", md: "18px" }}>in any discipline </Text> */}
                            {/* <Text>Documents Required to Apply</Text> */}
                        </Box>
                        {isMediumScreen && (
                            <Box height="130px" position="relative" display="flex" alignItems="flex-end">
                                <Divider orientation="vertical" borderColor="gray" />
                            </Box>
                        )}
                       
                            <Box display="flex" flexDirection="row" ml={{base:"80px", md:"initial"}} justifyContent="center" alignItems="center" onClick={onOpen}>
                                <Button variant="simple" bgColor="#003399" color="white" onClick={onOpen}>APPLY NOW</Button>
                            </Box>
                       
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default StickyNavbar;
