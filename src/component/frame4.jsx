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
                    <Text fontSize={{ base: "24px", md: "32px" }} textAlign="justify" fontFamily="GT Sectra Fine" fontWeight="700">Why Choose PLM as career?</Text>
                    {/* <Text textAlign="center" fontSize={{ base: "16px", md: "18px" }} width={{ base: "100%", md: "55%" }}>Harness the full potential of Data Science and AI for a rapidly-changing world</Text> */}
                    <Text textAlign="justify" fontSize={{ base: "16px", md: "18px" }} width={{ base: "100%", md: "55%" }} mt={5}>1.<span style={{fontWeight:"600"}}>High Demand in Market:</span> Many industries, including automotive, aerospace, electronics, and consumer goods, rely on PLM systems to manage the entire lifecycle of a product. This reliance creates a steady demand for PLM professionals.</Text>
                    <Text textAlign="justify" fontSize={{ base: "16px", md: "18px" }} width={{ base: "100%", md: "55%" }} mt={5}>2.<span style={{fontWeight:"600"}}>*Diverse Career Opportunities*:</span> PLM professionals can work in various roles such as PLM Consultant, PLM Admin and Support, PLM Developer, project managers, business analysts, system architects. This diversity allows for career growth and the opportunity to switch roles while staying within the same field.</Text>
                    <Text textAlign="justify" fontSize={{ base: "16px", md: "18px" }} width={{ base: "100%", md: "55%" }} mt={5}>3.<span style={{fontWeight:"600"}}>*Innovation and Technology*:</span> Working in PLM involves dealing with cutting-edge technologies and innovative processes. This can be appealing to those who enjoy staying at the forefront of technological advancements.</Text>
                    <Text textAlign="justify" fontSize={{ base: "16px", md: "18px" }} width={{ base: "100%", md: "55%" }} mt={5}>4.<span style={{fontWeight:"600"}}>*Interdisciplinary Skills*:</span> PLM requires a blend of skills in engineering, business, and IT. This multidisciplinary approach can be intellectually stimulating and offers a broad skill set that is transferable to other roles.</Text>
                    <Text textAlign="justify" fontSize={{ base: "16px", md: "18px" }} width={{ base: "100%", md: "55%" }} mt={5}>5.<span style={{fontWeight:"600"}}>*Competitive Salaries*:</span> Due to the specialized knowledge and skills required, PLM professionals often enjoy competitive salaries and benefits.</Text>
                </Box>
                {/* <Box display="flex" flexDirection={{base:"column" , md:"row"}} p={8} gap={10} justifyContent="center" alignItems="center">
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
                </Box> */}
                {/* <Divider borderColor="gray.300" /> */}
            </Box>
            
        </Box>
    );
}

export default Frame4;
