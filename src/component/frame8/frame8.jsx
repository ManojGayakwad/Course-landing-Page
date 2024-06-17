import React, { useState, useEffect } from 'react';
import { Box, Text, Divider, Image, useMediaQuery, Icon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import './frame8.css';  // Import CSS file for animations

const Frame8 = () => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
    const images = [
        "./img1.webp", "./img2.webp", "./img3.webp", "./img4.webp", "./img5.webp",
        "./img6.webp", "./img7.webp", "./img8.webp", "./img9.webp", "./img10.webp"
    ];
    const [currentImages, setCurrentImages] = useState(isMediumScreen ? images.slice(0, 1) : images.slice(0, 3));
    const [animationClasses, setAnimationClasses] = useState(isMediumScreen ? [''] : ['', '', '']);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isMediumScreen) {
                setAnimationClasses(['slide-out-left']);
                setTimeout(() => {
                    setCurrentImages(prevImages => {
                        const nextIndex = (images.indexOf(prevImages[0]) + 1) % images.length;
                        return [images[nextIndex]];
                    });
                    setAnimationClasses(['']);
                }, 1000); // Duration of the animation
            } else {
                setAnimationClasses(['slide-out-left', '', 'slide-in-right']);
                setTimeout(() => {
                    setCurrentImages(prevImages => {
                        const nextIndex = (images.indexOf(prevImages[2]) + 1) % images.length;
                        return [prevImages[1], prevImages[2], images[nextIndex]];
                    });
                    setAnimationClasses(['', '', '']);
                }, 1000); // Duration of the animation
            }
        }, 2000); // Adjust the duration as needed

        return () => clearInterval(interval);
    }, [images, isMediumScreen]);

    return (
        <Box position="relative" display="flex" p={{ base: 4, md: 20 }} justifyContent="center" alignItems="center" fontFamily="sans-serif" flexDirection="column">
            <Divider borderColor="gray.300" />
            <Box mt={5}>
                <Text fontSize={{ base: "24px", md: "40px" }} display="flex" justifyContent="center" alignItems="center" fontFamily="GT Sectra Fine" fontWeight="700">Tools Covered</Text>

                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" mt={5} gap={48} position="relative" overflow="hidden" width="100%">
                    {currentImages.map((src, index) => (
                        <Box key={index} className={animationClasses[index]} display="flex" boxSize={36} justifyContent="center" alignItems="center">
                            <Image src={src} alt={`Image ${index + 1}`} />
                        </Box>
                    ))}
                </Box>

                <Box ml={{ base: "initial", md: "50px" }}>
                    <Text fontWeight="600">Note:-</Text>
                    <ul style={{ marginLeft: "40px", fontSize: "14px", textAlign: "justify" }}>
                        <li>All product and company names mentioned in this material are trademarks or registered trademarks of their respective holders. Their use does not imply any affiliation with or endorsement by them.</li>
                        <li>The tools showcased in this material will be taught through pre-recorded demo videos.</li>
                        <li>Please note that the fee does not cover any payments required for certifications offered by the tools or tool subscriptions.</li>
                        <li>These pre-recorded demo videos are optional and will not be factored into your final evaluation.</li>
                    </ul>
                </Box>
                <Divider borderColor="gray.300" mt={14} />
                <Text fontSize={{ base: "24px", md: "40px" }} mt={10} display="flex" justifyContent="center" alignItems="center" fontFamily="GT Sectra Fine" fontWeight="700">Programme Director</Text>
                <Box mt={5} ml={{ base: "initial", md: 150 }} display="flex" justifyContent="revert-layer" alignItems="center" flexDirection={{ base: "column", md: "row" }} gap={5}>
                    <Box
                        width={{ base: '120px', md: '150px' }}
                        height={{ base: '120px', md: '120px' }}
                        borderRadius="full"
                        overflow="hidden"
                        boxShadow="md"

                        border="10px solid"
                        borderColor='gray.300'
                    // mr={{ base: 0, md: 8 }} // Margin between profile and description on larger screens
                    >
                        <Image
                            src="./profile.webp" // Replace with your actual profile image URL
                            alt="Profile Image"
                            width={{ base: "100%", md: "100%" }}
                            height={{ base: "100%", md: "100%" }}
                            objectFit="cover"
                        />
                    </Box>
                    <Box>
                        <Text textAlign={{ base: "center", md: "initial" }} fontSize={{ base: '18px', md: '20px' }} textColor="#003399" fontWeight="700" lineHeight="120%">
                            Prof. M.P. Sebastian, PhD
                        </Text>
                        <Text textAlign={{ base: "center", md: "initial" }} fontSize={{ base: '18px', md: '20px' }} fontWeight="700">
                            Prof. M.P. Sebastian, PhD Professor, Information Systems
                        </Text>
                        <Text textAlign={{ base: "center", md: "initial" }} fontSize={{ base: '14px', md: '16px' }} width={{ base: "100%", md: "90%" }}>
                            Professor Sebastian received both his masters degree and PhD from the Indian Institute of Science, Bangalore. His research interests include artificial intelligence, machine l...
                        </Text>
                        <Text textAlign={{ base: "center", md: "initial" }} >More Info</Text>
                    </Box>
                </Box>
                <Divider borderColor="gray.300" mt={14} />
                <Box mt={5} ml={{ base: "initial", md: 0 }} display="flex" flexDirection={{ base: "column", md: "row-reverse" }} gap={5}>

                    <Image
                        src="./certify.webp" // Replace with your actual profile image URL
                        alt="Profile Image"
                        width={{ base: "100%", md: "100%" }}
                        height={{ base: "100%", md: "100%" }}
                        objectFit="cover"
                    />
                    <Box>
                        <Text fontSize={{ base: "24px", md: "40px" }} mt={{ base: 0, md: 10 }} display="flex" justifyContent={{ base: "center", md: "initial" }} fontFamily="GT Sectra Fine" fontWeight="700">
                            Programme Certificate
                        </Text>

                        <Text textAlign={{ base: "justify", md: "initial" }} fontSize={{ base: '14px', md: '16px' }} width={{ base: "100%", md: "95%" }}>
                            IIM Kozhikode will award a certificate of successful completion to participants who complete the programme successfully with 70% of the score in the evaluation. A participant with less than 70% of the score in the overall evaluation will not be awarded any certificate.</Text>
                        <Text textAlign={{ base: "justify", md: "initial" }} mt={8}>Note: All certificate images are for illustrative purposes only and may be subject to change at the discretion of IIM Kozhikode.</Text>
                    </Box>
                </Box>
                <Divider borderColor="gray.300" mt={14} />
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <Text fontSize={{ base: "24px", md: "40px" }} mt={{ base: 0, md: 10 }} display="flex" justifyContent="center" fontFamily="GT Sectra Fine" fontWeight="700">Key Programme Takeaways</Text>
                    <Box display="flex" justifyContent="center" alignItems="center" width={{ base: "100%", md: "65%" }} mt={4}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} mt={-8} />
                        <Text textAlign={{base:"initial" ,md:"initial"}} fontSize={{ base: "15px", md: "18px" }}>
                            Learn how to implement data science, machine learning and artificial intelligence techniques and devise cutting-edge solutions to real-life problems within your organisation
                        </Text>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" width={{ base: "100%", md: "65%" }} mt={4}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} mt={-8} />
                        <Text textAlign={{base:"initial" ,md:"initial"}} fontSize={{ base: "15px", md: "18px" }}>
                            Develop a comprehensive understanding of DS and AI concepts and identify the best models to fit various business situations
                        </Text>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" width={{ base: "100%", md: "65%" }} mt={4}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} mt={-8} />
                        <Text textAlign={{base:"initial" ,md:"initial"}}fontSize={{ base: "15px", md: "18px" }}>
                            Gain hands-on learning in identifying, defining, designing, implementing and monitoring DS and AI projects
                        </Text>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" width={{ base: "100%", md: "65%" }} mt={4}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} mt={-8} />
                        <Text textAlign={{base:"initial" ,md:"initial"}} fontSize={{ base: "15px", md: "18px" }}>
                            Interact and collaborate with industry experts to understand the technical and business applications of Machine Learning and Generative AI
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Frame8;
