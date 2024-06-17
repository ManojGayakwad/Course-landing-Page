import React from 'react';
import { Box, Text, Divider, Image, useMediaQuery, Icon, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'

const Frame3 = () => {
    return (
        <>
            <Box position="relative" overflow="auto" color="black" fontFamily="arial" display="flex" flexDirection="row" p={{ base: 5, md: 20 }} mt={{ md: -28 }} >

                <Box p={4} minWidth={{ base: "100%", md: "initial" }}>
                    <Box  >
                        <Image src="./p1.webp" alt="profile" boxSize={380} h={250} />
                        <Text p={4} fontSize="18px" fontWeight="700">Globally Renowned Faculty</Text>
                        <Box display="flex" alignItems="center" width={{ base: "100%", md: "80%" }} >
                            <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} mt={-8} />
                            <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }}>
                                Learn from the best instructors and resources from anywhere in the world.                        </Text>
                        </Box>

                        <Box display="flex" alignItems="center" width={{ base: "100%", md: "80%" }} mt={2}>
                            <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} />
                            <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }}>
                                Access the experts, regardless of their location.
                            </Text>
                        </Box>
                    </Box>

                    {/* P2 */}

                </Box>

                <Box p={4} minWidth={{ base: "100%", md: "initial" }}>
                    <Box >
                        <Image src="./p2.webp" alt="profile" boxSize={350} h={250} />
                        <Text p={4} fontSize="18px" fontWeight="700">Cohort-Based Learning</Text>
                        <Box display="flex" alignItems="center" width={{ base: "100%", md: "80%" }} >
                            <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} mt={-8} />
                            <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }}>
                                Learn with an accomplished group of peers and build your network.
                            </Text>
                        </Box>

                        <Box display="flex" alignItems="center" width={{ base: "100%", md: "80%" }} mt={2}>
                            <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} />
                            <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }}>
                                Gain cross-industry and cross-functional knowledge.
                            </Text>
                        </Box>
                    </Box>

                    {/* P3 */}

                </Box>
                <Box minWidth={{ base: "100%", md: "initial" }} p={4}>
                    <Box >
                        <Image src="./p3.webp" alt="profile" boxSize={350} h={250} />
                        <Text p={4} fontSize="18px" fontWeight="700">Flexible Learning</Text>
                        <Box display="flex" alignItems="center" width={{ base: "100%", md: "80%" }} >
                            <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} mt={-8} />
                            <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }}>
                                Learn at your own pace with high-quality, pre-recorded faculty videos.
                            </Text>
                        </Box>

                        <Box display="flex" alignItems="center" width={{ base: "100%", md: "80%" }} mt={2}>
                            <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} />
                            <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }}>
                                Advance your career without disrupting your busy schedule.
                            </Text>
                        </Box>
                    </Box>

                    {/* P2 */}

                </Box>
            </Box>
        </>
    );
};


export default Frame3;
