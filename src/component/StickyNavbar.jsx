import React, { useState, useEffect } from 'react';
import { Box, Divider, Flex, Text, Button, useMediaQuery } from '@chakra-ui/react';

const StickyNavbar = () => {
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
                <Box display="flex" flexDirection="row" gap={{ base: 4, md: 8 }}>
                    <Flex flexDirection="row" gap={{ base: 10, md: 10 }}>
                        <Box>
                            <Text fontSize="13px">STARTS ON</Text>
                            <Text fontWeight="700" fontSize={{ base: "15px", md: "18px" }}>June 26, 2024</Text>
                        </Box>
                        {isMediumScreen && ( 
                        <Box height="130px" position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                        )} 
                    </Flex>
                    <Flex flexDirection="row"  gap={{ base: 10, md: 10 }}>
                        <Box >
                            <Text fontSize="13px">DURATION</Text>
                            <Text fontWeight="700" fontSize={{ base: "15px", md: "18px" }}>8 Months, Online</Text>
                            <Text>Weekly effort of 7-8 hours</Text>
                        </Box>
                        {isMediumScreen && ( 
                        <Box height="130px" position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                        )} 
                    </Flex>
                </Box>
                <Box display="flex" flexDirection="row" gap={{ base: 4, md: 8 }}>
                    <Flex flexDirection="row" gap={{ base: 10, md: 10 }}>
                        <Box>
                            <Text fontSize="13px">PROGRAMME FEE</Text>
                            <Text fontWeight="700" fontSize={{ base: "15px", md: "18px" }}>₹1,50,000</Text>
                            <Text>GST will be charged at checkout</Text>
                            <Text>View payment plan</Text>
                        </Box>
                        {isMediumScreen && ( 
                        <Box height="130px" position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                        )} 
                    </Flex>
                    <Flex flexDirection={{base:"column", md:"row"}} gap={{ base: 10, md: 10 }}>
                        <Box>
                            <Text>Eligibility</Text>
                            <Text fontWeight="700" fontSize={{ base: "15px", md: "18px" }}>Minimum Graduate or</Text>
                            <Text fontWeight="700" fontSize={{ base: "15px", md: "18px" }}>Diploma Holder (10+2+3)</Text>
                            <Text fontWeight="700" fontSize={{ base: "15px", md: "18px" }}>in any discipline </Text>
                            <Text>Documents Required to Apply</Text>
                        </Box>
                        {isMediumScreen && ( 
                        <Box height="130px" position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                        )} 
                        {isMediumScreen && (
                            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                               <a href='https://admissions.emeritus.org/?locale=English&program_sfid=01tRC000000HQ9NYAW&source=applynowty&utm_campaign=B-365D_IN_GG_DA_IIMK-DSAI_Discovery_Tier1&utm_content=Custom-Intent&utm_medium=Search&utm_source=Google'><Button variant="simple" bgColor="#003399" color="white">APPLY NOW</Button></a>
                            </Box>
                        )}
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default StickyNavbar;
