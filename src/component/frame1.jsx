import React from 'react';
import { Box, Text, Checkbox, extendTheme, Button, Flex, UnorderedList, ListItem } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'
import { FiDownload } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const theme = extendTheme({
    components: {
        Checkbox: {
            baseStyle: {
                control: {
                    bg: "rgba(34, 34, 34, .5)",
                    borderColor: "rgba(34, 34, 34, .5)",
                    _checked: {
                        bg: "rgba(34, 34, 34, .5)",
                        borderColor: "rgba(34, 34, 34, .5)",
                        _hover: {
                            bg: "rgba(34, 34, 34, .5)",
                            borderColor: "rgba(34, 34, 34, .5)",
                        },
                    },
                },
            },
        },
    },
});

const Frame1 = ({ onOpen }) => {
    return (
        <Box
            position="relative"
            bg="white"
            color="black"
            fontFamily="GT Sectra Fine"
            // fontWeight="600" 
            backgroundImage="linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('./unk23.png')" // Path to your background image
            backgroundSize="contain,100% 100%,100% 100%"
            backgroundPosition="cover"
            height={{ base: "100vw", md: "45vw" }}
            backgroundRepeat="no-repeat"

        >
            <Box color="white" display='flex' flexDirection={{ base: "column", md: "row" }}  justifyContent={{base:"justify", md:"center"}} gap={28}>
                <Box padding={{ base: "6px", md: "20px" }} mt={{ base: 28, md: 56 }} width={{ base: "100%", md: "100%" }} mr={{base:0, md:480}}>
                    {/* <Text p={2} textAlign="center" bgColor="rgba(34, 34, 34, .5)" width={{ base: "40%", md: "20%" }} ml={{ base: "80px", md: "0px" }}>BATCH 3</Text> */}
                    {/* Programme in Data Science and Artificial Intelligence */}
                    <Text textAlign={{ base: "initial", md: "center" }} fontSize={{ base: "1.2rem", md: "2.625rem" }} fontFamily="Copperplate Gothic Bold" fontWeight="700" lineHeight="120%">One Year Professional Certificate Programme</Text>
                    <Text textAlign={{ base: "initial", md: "center" }} fontSize={{ base: "1.2rem", md: "2.625rem" }} fontFamily="Copperplate Gothic Bold" fontWeight="700" lineHeight="120%">in Siemens Teamcenter PLM</Text>
                    <Text color="#F6B70A" textAlign={{ base: "initial", md: "center" }} fontSize={{ base: "1.2rem", md: "2.625rem" }} fontFamily="Copperplate Gothic Bold" fontWeight="700" lineHeight="120%">(Product Lifecycle Management)</Text>
                    <Box mt={5}>
                        <Text textAlign={{ base: "initial", md: "justify" }} fontSize={{ base: "15px", md: "25px" }} fontFamily="Copperplate Gothic Bold" fontWeight="700">Elligibility :- B.E(Any Branch), M.Sc(Comp)</Text>
                        <Text textAlign={{ base: "initial", md: "justify" }} fontSize={{ base: "15px", md: "25px"}} fontFamily="Copperplate Gothic Bold" fontWeight="700" ml={{base:"85px", md:"140px"}}>B.sc(Comp), MCA</Text>

                    </Box>


                    {/* <Checkbox isChecked={true} defaultChecked theme={theme}>
                        Integrated with Generative AI
                    </Checkbox> */}
                </Box>
                {/* One Year Professional Certificate Programme in Siemens Teamcenter PLM (Product Lifecycle Management)*/}
                {/* form */}
                {/* <Box width={{ base: "100%", md: "360px" }} background="#fff" p={4} color="black" fontFamily='arial'  >
                    <Flex flexDirection="column" justifyContent="center" alignItems="center">
                        <CheckCircleIcon w={8} h={8} mb={2} color="#003399" boxSize={14} />
                        <Text textAlign={{ base: "center", md: "initial" }} fontWeight="600" fontSize="20px" mb="5px">Thank you for your interest.</Text>
                        <Text fontWeight="600" fontSize="18px" mb={8}>What to do next?</Text>
                    </Flex>
                    <Box display="flex" flexDirection="row" gap="10px" _hover={{textDecoration:"underline"}}>
                        <FiDownload color="#0073b1" fontSize="25px" />
                        <a href="https://admissions.emeritus.org/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM0JaRVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--91a5d2dd6904eb161773a397aa24049fff722cc7/IIMK%20DSAI%20B3_Brochure%201.pdf?disposition=inline"><Text fontWeight="600" fontSize="16px" color="#0073b1">Download Brochure</Text></a>
                    </Box>
                    <Text ml="35px" fontSize="15px" mb={6}>Get in-depth programme details to fast-track your career.</Text>
                    <Box display="flex" flexDirection="row" gap="10px" _hover={{textDecoration:"underline"}}>
                        <IoIosCall color="#0073b1" fontSize="25px" />
                        <a href="https://calendly.com/emeritus-program-advisory-team/schedule-a-15-min-call-to-know-more-about-iimk-clone?month=2024-06"><Text fontWeight="600" fontSize="16px" color="#0073b1">Schedule a Call</Text></a>
                    </Box>
                    <Text ml="35px" fontSize="15px" mb={6}>Our Programme Advisor will call you based on your convenience.</Text>
                    <Box display="flex" flexDirection="row" gap="10px" _hover={{textDecoration:"underline"}}>
                        <FaWhatsapp color="#0073b1" fontSize="25px" />
                        <a href='https://api.whatsapp.com/send/?phone=918657038243&text&type=phone_number&app_absent=0'><Text fontWeight="600" fontSize="16px" color="#0073b1">Contact us by WhatsApp</Text></a>
                    </Box>
                    <Text ml="35px" fontSize="15px" mb={6}>Have questions? Our Advisor will assist you promptly.</Text>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Button variant="simple" bgColor="#003399" color="white" onClick={onOpen}>START APPLICATION NOW</Button>
                    </Box>
                </Box> */}

            </Box>

        </Box>
    );
};


export default Frame1;
