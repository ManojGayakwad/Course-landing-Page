import React, { useState, useEffect } from 'react';
import { Box, Text, Divider, Image, useMediaQuery, Icon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';


const Frame12 = () => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
    return (
        <Box position="relative" display="flex" fontFamily="arial" justifyContent="center" alignItems="center"  flexDirection="column">
            {/* <Divider borderColor="gray.300" /> */}
            <Text fontSize={{ base: "24px", md: "40px" }}  display="flex" justifyContent="center" fontFamily="GT Sectra Fine" fontWeight="700">Student Loan Available</Text>
            <Box p={3}>
                <Text fontSize={{ base: "15px", md: "18px" }} display="flex"  mb={5} justifyContent="center" fontWeight="700">Below EMI plans are available for the Programme Fee: INR 1,50,000 + GST</Text>
                <Box  display="flex" background="gray.200" fontSize={{ base: "13px", md: "16px" }}  borderTop="1px solid gray" justifyContent="space-between" flexDirection="row " p={1} fontWeight="700">
                    <Text>Full Fee with GST</Text>
                    <Text>Tenure (months)</Text>
                    <Text >EMI</Text>
                </Box>
                <Box display="flex"  justifyContent="space-between" alignItems="center" flexDirection="row " p={1} >
                    <Text>INR 1,77,000</Text>
                    <Text>36</Text>
                    <Text>INR 6,318</Text>
                </Box>

            </Box>
            <Text fontSize="14px" ml={8} width={{base:"100%" , md:"65%"}} mt={5}>Note:-The above EMI's are indicative. The EMI's offered by each of the loan providers might vary from the above figures, depending upon tenure and loan amount to be disbursed.Other EMI tenures available (Months): Propelld: 12/18/24/30/36/42/48 Eduvanz: 12/24/36/48</Text>
            <Divider borderColor="gray.300" mt={10}/>
        </Box>
    );
}

export default Frame12;
