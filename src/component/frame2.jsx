import React from 'react';
import { Box, Text, Divider, Image, useMediaQuery, Icon, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'

const Frame2 = ({onOpen}) => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");

    return (
        <Box position="relative" display="flex" p={{ base: 4, md: 20 }} justifyContent="center" alignItems="center" fontFamily="sans-serif" flexDirection="column">
            <Box display="flex" background="#f4f4f4" justifyContent="center" alignItems="center" color="black" width={{ base: "100%", md: "70%" }} p={10}>
                <Text fontSize={{ base: "16px", md: "24px" }} textAlign="center" fontWeight="700">Application Deadline: June 19, 2024</Text>
            </Box>
            <Box p={{ base: 4, md: 10 }} mt={{ base: "40px" }} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Text fontSize={{ base: "24px", md: "40px" }} fontFamily="GT Sectra Fine" fontWeight="700">Programme Overview</Text>
                <Text textAlign="justify" fontSize="17px" width={{ base: "100%", md: "75%" }}>Data Science and AI is transforming businesses around the world. As the pace of change accelerates, the value add must accelerate too. To help you scale data science, reap benefits, and secure a career upgrade, IIM Kozhikode has launched the Data Science and AI Programme. </Text>
                <Text textAlign="justify" fontSize="17px" width={{ base: "100%", md: "75%" }} mt={5}>Make most of the ample job opportunities in this field by learning hands-on and functional data science, machine learning and AI tools and techniques. Grasp new-age skills and knowledge to capture continuous insights, address common challenges, and make better-informed decisions. Maximise profits and ROI by using Generative AI to accrue value and unleash the next frontier of growth.</Text>
            </Box>
            <Divider borderColor="gray.300" />
            <Box mt={5}>
                <Text fontSize={{ base: "24px", md: "40px" }} display="flex" justifyContent="center" alignItems="center" fontFamily="GT Sectra Fine" fontWeight="700">Programme Highlights</Text>

                <Box display="flex" flexDirection={{ base: "column", md: "row" }} mt={5} gap={5}>
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent="center" alignItems="center" gap={5}>
                        <Image src="./L1.webp" alt="First Image" boxSize={16} />
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }}>350+ Pre-Recorded Videos 60+ Assignments 50+ Quizzes</Text>

                    </Box>
                    {isMediumScreen && (
                        <Box height="60px" mt={10} position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                    )}
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent="center" alignItems="center" gap={5}>
                        <Image src="./L2.webp" alt="First Image" boxSize={16} />
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }}>Hands On Experience with 8+ Industry Tools*</Text>

                    </Box>
                    {isMediumScreen && (
                        <Box height="60px" mt={10} position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                    )}
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent="center" alignItems="center" gap={5}>
                        <Image src="./L3.webp" alt="First Image" boxSize={16} />
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }}>25+ Hours of Generative AI content and Doubt Clearing Sessions</Text>

                    </Box>
                    {isMediumScreen && (
                        <Box height="60px" mt={10} position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                    )}
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent="center" alignItems="center" gap={5}>
                        <Image src="./L4.webp" alt="First Image" boxSize={16} />
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }}>2 Industry backed Capstone Projects</Text>

                    </Box>

                </Box>
                <Box mt={20} >
                    <Text fontWeight="600">Note:-</Text>
                    <ul style={{ marginLeft: "40px", fontSize: "14px", textAlign: "justify" }}>
                        <li>The final number of quizzes, assignments and discussions will be confirmed closer to the programme start.</li>
                        <li>This is a self-paced online programme. Thus, faculty will not be a part of weekly live sessions or any other live interaction in this programme. We have a curated panel of eminent industry practitioners who will be conducting the weekly live doubt-clearing sessions.</li>
                        <li>*The pre-recorded demo videos are optional and will not be factored into your final evaluation.</li>
                    </ul>
                </Box>
                <Divider borderColor="gray.300" mt={14} />

                <Box mt={8} display="flex" justifyContent="center" alignItems="center" flexDirection="column" >
                    <Text fontSize={{ base: "24px", md: "40px" }} fontFamily="GT Sectra Fine" fontWeight="700" textAlign="center">Who is this Programme for?</Text>

                    {/* Add check circle Icon as bullets of following code */}
                    <Box display="flex" alignItems="center" width={{ base: "100%", md: "65%" }} mt={4}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} mt={-8} />
                        <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }}>
                            Early Level managers looking to effectively lead end-to-end DS, ML & AI projects and solve complex business problems
                        </Text>
                    </Box>

                    <Box display="flex" alignItems="center" width={{ base: "100%", md: "65%" }} mt={2}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} />
                        <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }}>
                            Consultants who are looking to build their expertise in DS, ML & AI for better client management
                        </Text>
                    </Box>
                    <Text fontSize="14px" mt={10}>Note : Basic understanding of mathematics and statistics is recommended for the programme.</Text>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" mt={8}>
                        <Button variant="simple" bgColor="#003399" color="white" onClick={onOpen}>APPLY NOW</Button>
                    </Box>
                </Box>
                <Divider borderColor="gray.300" mt={14} />
                <Box mt={8}>
                    <Text fontSize={{ base: "24px", md: "35px" }} textAlign="center" display="flex" justifyContent="center" alignItems="center" fontFamily="GT Sectra Fine" fontWeight="700">
                        World-class learning with faculty-led, pre-recorded videos
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}

export default Frame2;
