import React from 'react';
import { Box, Text, Divider, Image, useMediaQuery, Icon, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'

const Frame4 = () => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");

    return (
        <Box>
            <Divider borderColor="gray.300" />

            <Box position="relative" display="flex" p={{ base: 4, md: 2 }} justifyContent="center" alignItems="center" fontFamily="sans-serif" flexDirection="column">

                <Box mt={{ base: "20px" }} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <Text fontSize={{ base: "24px", md: "32px" }} textAlign="center" fontFamily="GT Sectra Fine" fontWeight="700">Why Choose a Data Science and AI Programme?</Text>
                    <Text textAlign="center" fontSize={{ base: "16px", md: "18px" }} width={{ base: "100%", md: "55%" }}>Harness the full potential of Data Science and AI for a rapidly-changing world</Text>
                    <Text textAlign="center" fontSize={{ base: "16px", md: "18px" }} width={{ base: "100%", md: "55%" }} mt={5}>Data Science and AI continue to hold untapped potential and promise. These powerful technologies unlock product and service innovation, enable personalization, and uncover insights that were hidden away in reams of data. A career in Data Science and AI will help you gain a first-mover advantage on nascent industry trends, make impactful applications possible, and apply tangible results to solve complex business problems.</Text>
                    <Text textAlign="center" fontSize={{ base: "16px", md: "18px" }} width={{ base: "100%", md: "55%" }} mt={5}>High-performing sales organizations are 1.9 times more likely to be using AI already than underperformers, according to Salesforce’s 2022 State of Sales report.</Text>
                </Box>
                <Box display="flex" flexDirection={{base:"column" , md:"row"}} p={8} gap={10} justifyContent="center" alignItems="center">
                    <Box width={{base:"100%" ,md:"18%"}} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        <Text color="#003399" fontSize={{ base: "34px", md: "65px" }} textAlign="center" display="flex" justifyContent="center" alignItems="center" fontFamily="GT Sectra Fine" fontWeight="700">
                            64%
                        </Text>
                        <Text textAlign="center" fontSize="18px">of respondents believe that AI enables a competitive advantage</Text>
                    </Box>
                    <Box  width={{base:"100%" ,md:"18%"}} display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={-6}>
                        <Text color="#003399" fontSize={{ base: "34px", md: "65px" }}  textAlign="center" display="flex" justifyContent="center" alignItems="center" fontFamily="GT Sectra Fine" fontWeight="700">
                            54%
                        </Text>
                        <Text textAlign="center " fontSize="18px">
                            are spending 4x more than last year on AI initiatives
                        </Text>
                    </Box>
                    <Box  width={{base:"100%" ,md:"17%"}}display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        <Text color="#003399" fontSize={{ base: "34px", md: "65px" }}  textAlign="center" display="flex" justifyContent="center" alignItems="center" fontFamily="GT Sectra Fine" fontWeight="700">
                            74%
                        </Text>
                        <Text textAlign="center"  fontSize="18px">plan to integrate AI into all enterprise applications within three years</Text>
                    </Box>
                </Box>
                {/* <Divider borderColor="gray.300" /> */}
            </Box>
            
        </Box>
    );
}

export default Frame4;
