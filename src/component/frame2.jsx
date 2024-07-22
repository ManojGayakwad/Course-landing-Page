import React from 'react';
import { Box, Text, Divider, Image, useMediaQuery, Icon, Button, UnorderedList, ListItem } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'
import { SiGoogleclassroom } from "react-icons/si";
import { MdModelTraining } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbUsersGroup } from "react-icons/tb";
import { MdSpatialTracking } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";


const Frame2 = ({ onOpen }) => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");

    return (
        <Box position="relative" display="flex" p={{ base: 4, md: 20 }} justifyContent="center" alignItems="center" fontFamily="Arial" flexDirection="column">
            <Box display="flex" flexDirection="column" background="#f4f4f4" justifyContent="center" alignItems="center" color="black" width={{ base: "100%", md: "70%" }} p={{ base: 6, md: 10 }} style={{ fontWeight: "600" }}>
                <UnorderedList spacing={2} ml={{base:0, md:40}}>
                    <ListItem fontSize={{ base: "15px", md: "22px" }} textAlign={{ base: "justify", md: "justify" }}>
                        Application Deadline: <span>10<sup>th</sup> Aug 2024</span>
                    </ListItem>
                    <ListItem fontSize={{ base: "15px", md: "20px" }} textAlign={{ base: "justify", md: "justify" }}>
                        Number of seats available: <span>25 No's only</span>
                    </ListItem>
                    {/* <ListItem fontSize={{ base: "15px", md: "20px" }} textAlign={{ base: "justify", md: "justify" }}>
                        Training Mode: <span>Online and Offline</span>
                    </ListItem> */}
                    <ListItem fontSize={{ base: "15px", md: "20px" }} textAlign={{ base: "justify", md: "justify" }}>
                        Admission Process: <span>Admission will be given to candidates based on performance on personal disccussion</span>
                    </ListItem>
                </UnorderedList>
            </Box>

            <Box p={{ base: 4, md: 10 }} mt={{ base: "40px" }} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Text fontSize={{ base: "24px", md: "40px" }} fontFamily="GT Sectra Fine" fontWeight="700">Programme Overview</Text>
                <Text textAlign="justify" fontSize="17px" width={{ base: "100%", md: "75%" }}>One Year Professional Certificate Programme in Siemens Teamcenter PLM (Product Lifecycle Management) Course is designed</Text>
                <Text textAlign="justify" fontSize="17px" width={{ base: "100%", md: "75%" }} mt={5}>1.	To transform freshers, job seekers and career-oriented graduates into Teamcenter PLM professionals by providing them high end industry-based training and projects during the course tenure. </Text>
                <Text textAlign="justify" fontSize="17px" width={{ base: "100%", md: "75%" }} mt={5}>2.	This high-end industry based hands-on knowledge will help the participants with stand in the market for getting the job opportunities and excel their performance in professional career.</Text>
            </Box>
            <Divider borderColor="gray.300" />
            <Box mt={5}>
                <Text fontSize={{ base: "24px", md: "40px" }} display="flex" justifyContent="center" alignItems="center" fontFamily="GT Sectra Fine" fontWeight="700">Programme Highlights</Text>

                <Box display="flex" flexDirection={{ base: "column", md: "row" }} mt={5} gap={4}>
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent={{base:"justify", md:"center"}} alignItems="center" gap={5}>
                        <Icon as={SiGoogleclassroom} alt="First Image" color="#003399"  w={"60px"} h={"60px"} />
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }}>Live/Classroom Training by Industry PLM Experts</Text>

                    </Box>
                    {isMediumScreen && (
                        <Box height="60px" mt={10} position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                    )}
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent={{base:"justify", md:"center"}} alignItems="center" gap={5}>
                        <Icon as={MdModelTraining} alt="First Image" color="#003399"  w={"60px"} h={"60px"}  mt={{base:"initial" , md:6}} />
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }} >One Month Free Training</Text>

                    </Box>
                    {isMediumScreen && (
                        <Box height="60px" mt={10} position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                    )}
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent={{base:"justify", md:"center"}} alignItems="center" gap={5}>
                        <Icon as={AiFillSafetyCertificate} alt="First Image" color="#003399"  w={"60px"} h={"60px"}  mt={{base:"initial" , md:6}}/>
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }}  mr={{base:3 , md:"initial"}}>Hands on Industry Based Projects</Text>

                    </Box>
                    {isMediumScreen && (
                        <Box height="60px" mt={10} position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                    )}
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent={{base:"justify", md:"center"}} alignItems="center" gap={5}>
                        <Icon as={TbUsersGroup} alt="First Image" color="#003399"  w={"60px"} h={"60px"} />
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }}>Interview Preparation and Group Discussion</Text>

                    </Box>
                    
                   
                    {/* {isMediumScreen && (
                        <Box height="60px" mt={10} position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                    )} */}
                    {isMediumScreen && (
                        <Box height="60px" mt={10} position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                    )}
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent={{base:"justify", md:"center"}} alignItems="center" gap={5}>
                        <Icon as={MdSpatialTracking} alt="First Image" color="#003399"  w={"60px"} h={"60px"}  mt={{base:"initial" , md:6}}/>
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }}>Individual Performance Tracking </Text>

                    </Box>
                    {isMediumScreen && (
                        <Box height="60px" mt={10} position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                    )}
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent={{base:"justify", md:"center"}} alignItems="center" gap={5}>
                        <Icon as={FaLaptop} alt="First Image" color="#003399"  w={"60px"} h={"60px"}  mt={{base:"initial" , md:6}}/>
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }}>Weekly live doubt-clearing sessions</Text>

                    </Box>
                    {isMediumScreen && (
                        <Box height="60px" mt={10} position="relative" display="flex" alignItems="flex-end">
                            <Divider orientation="vertical" borderColor="gray" />
                        </Box>
                    )}
                    <Box display="flex" flexDirection={{ base: "row", md: "column" }} justifyContent={{base:"justify", md:"center"}} alignItems="center" gap={5}>
                        <Icon as={LiaCertificateSolid} alt="First Image" color="#003399"  w={"60px"} h={"60px"}  mt={{base:"initial" , md:6}}/>
                        <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "16px", md: "18px" }}>6 months Internship with Stipend</Text>

                    </Box>
                </Box>
                {/* <Box mt={20} >
                    <Text fontWeight="600">Note:-</Text>
                    <ul style={{ marginLeft: "40px", fontSize: "14px", textAlign: "justify" }}>
                        <li>The final number of quizzes, assignments and discussions will be confirmed closer to the programme start.</li>
                        <li>This is a self-paced online programme. Thus, faculty will not be a part of weekly live sessions or any other live interaction in this programme. We have a curated panel of eminent industry practitioners who will be conducting the weekly live doubt-clearing sessions.</li>
                        <li>*The pre-recorded demo videos are optional and will not be factored into your final evaluation.</li>
                    </ul>
                </Box> */}
                <Divider borderColor="gray.300" mt={14} />

                <Box mt={8} display="flex" justifyContent="center" alignItems="center" flexDirection="column" >
                    <Text fontSize={{ base: "24px", md: "40px" }} fontFamily="GT Sectra Fine" fontWeight="700" textAlign="center">Who is this Programme for?</Text>

                    {/* Add check circle Icon as bullets of following code */}
                    <Box display="flex" alignItems="center" width={{ base: "100%", md: "65%" }} mt={4}>
                        {/* <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} /> */}
                        <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }} fontWeight="bold">
                            Freshers, Job Seekers and Career-Oriented graduates with following educational qualifications
                        </Text>
                    </Box>

                    <Box display="flex" alignItems="center" width={{ base: "100%", md: "65%" }} mt={2}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} />
                        <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }}>
                            B. E. (Branch – Computer, I.T., Mechanical, Electronics, Production, Electrical etc.)
                        </Text>
                    </Box>
                    <Box display="flex" alignItems="center" width={{ base: "100%", md: "65%" }} mt={2}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} />
                        <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }}>
                            M.Sc./ B.Sc. (Comp)
                        </Text>
                    </Box>
                    <Box display="flex" alignItems="center" width={{ base: "100%", md: "65%" }} mt={2}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} />
                        <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }}>
                            MCA
                        </Text>
                    </Box>
                    {/* <Text fontSize="14px" mt={10}>Note : Basic understanding of mathematics and statistics is recommended for the programme.</Text> */}
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" mt={8}>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeY5LvSlP8L1I9v9Zbl71DVWFucwDt0kyLsn7X-moC5i9J6gQ/viewform" target="_blank"><Button variant="simple" bgColor="#003399" color="white" >APPLY NOW</Button></a>
                    </Box>
                </Box>
                <Divider borderColor="gray.300" mt={14} />
                <Box mt={8}>
                    <Text fontSize={{ base: "24px", md: "35px" }}  textAlign="center" display="flex" justifyContent="center" alignItems="center" fontFamily="GT Sectra Fine" fontWeight="700">
                        Training Highlights
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}

export default Frame2;
