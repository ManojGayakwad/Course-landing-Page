import React, { useState, useEffect } from 'react';
import { Box, Text, Divider, Image, useMediaQuery, Icon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';


const Frame13 = () => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
    return (
        <Box position="relative" display="flex" fontFamily="arial" mt={5} justifyContent="center" alignItems="center" flexDirection="column">
            {/* <Divider borderColor="gray.300" /> */}
            <Text fontSize={{ base: "24px", md: "40px" }} display="flex" justifyContent="center" fontFamily="GT Sectra Fine" fontWeight="700">The Learning Experience</Text>
            <Box p={3} ml={{base:0, md:300}}>
                <Box display="flex" fontSize={{ base: "16px", md: "18px" }} width={{base:"100%", md:"70%"}}  justifyContent="space-between" flexDirection="row " p={1} >
                    <Text>More than 300,000 professionals globally, across 200 countries, have chosen to advance their skills with Emeritus and its educational learning partners. In fact, 90 percent of the respondents of a recent survey across all our programs said that their learning outcomes were met or exceeded. All the contents of the course would be made available to students at the commencement of the course. However, to ensure the program delivers the desired learning outcomes, the students may appoint Emeritus to manage the delivery of the program in a cohort-based manner during the course period the cost of which is already included in the overall Course fee of the course.</Text>
                </Box>
                <Box display="flex" fontSize={{ base: "16px", md: "18px" }} width={{base:"100%", md:"70%"}}  justifyContent="space-between" flexDirection="row " p={1} >
                    <Text>A dedicated program support team is available 7 days a week to answer questions about the learning platform, technical issues, or anything else that may affect your learning experience.</Text>
                </Box>


            </Box>
            <Divider borderColor="gray.300" />
        </Box>
    );
}

export default Frame13;
