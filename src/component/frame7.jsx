import React from 'react';
import { Box, Text, Divider, Image, useMediaQuery, Icon, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'

const Frame7 = () => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");

    return (
        <Box position="relative" display="flex" p={{ base: 4, md: 20 }} justifyContent="center" alignItems="center" fontFamily="sans-serif" flexDirection="column">
            <Divider borderColor="gray.300" />
            <Box mt={5}>
                <Text fontSize={{ base: "24px", md: "30px" }} display="flex" justifyContent="center" alignItems="center" fontFamily="GT Sectra Fine" fontWeight="700">Generative AI</Text>

                <Box display="flex" flexDirection={{ base: "column", md: "row" }} mt={5} gap={{base:5, md:20}}>
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent="center" alignItems="center" gap={4} >
                        <Image src="./A1.webp" alt="First Image" boxSize={16} />
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }}>Modules on Generative AI</Text>

                    </Box>
                    {isMediumScreen && (
                        <Box height="60px" mt={10} position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray.300" />
                        </Box>
                    )}
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent={{base:"left" , md:"center"}} alignItems="center" gap={4} >
                        <Image src="./A2.webp" alt="First Image" boxSize={16} />
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }}>Generative AI Tools</Text>

                    </Box>
                    {isMediumScreen && (
                        <Box height="60px" mt={10} position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray.300" />
                        </Box>
                    )}
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent={{base:"left" , md:"center"}} alignItems="center" gap={4} >
                        <Image src="./A3.webp" alt="First Image" boxSize={16} />
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }}>Masterclass</Text>

                    </Box>

                </Box>
                
               
            </Box>
            <Text mt={5} textAlign="center"><span style={{fontSize:"16px", fontWeight:"700"}}>Generative AI Tools</span> (ChatGPT, Google Bard, Finchat.io, Midjourney)</Text>
        </Box>
    );
}

export default Frame7;
