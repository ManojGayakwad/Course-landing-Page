import React from 'react';
import { Box, Text, Divider, Image, useMediaQuery, Icon, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'

const Frame3 = () => {
    return (
        <>
            <Box position="relative" overflow="auto" color="black" fontFamily="arial" display="flex" flexDirection="row" p={{ base: 5, md: 20 }} mt={{ md: -28 }} gap="10px">
                
                <Box  minWidth={{ base: "100%", md: "18%" }} display="flex" alignItems="center" justifyContent="center" bgColor="gray.100" boxShadow="lg"  borderRadius="25px" border="2px solid" borderColor="teal">
                    <Box  >
                        {/* <Image src="./p1.webp" alt="profile" boxSize={580} h={250} /> */}
                        <Text p={4} fontSize="18px" fontWeight="600" textAlign="center">Teamcenter Functional </Text>
                        
                    </Box>

                    {/* P2 */}

                </Box>

                <Box  minWidth={{ base: "100%", md: "18%" }} display="flex" alignItems="center" justifyContent="center" bgColor="gray.100" boxShadow="lg"  borderRadius="25px" border="2px solid" borderColor="teal">
                    <Box >
                        {/* <Image src="./p2.webp" alt="profile" boxSize={550} h={250} /> */}
                        <Text p={4} fontSize="18px" fontWeight="600" textAlign="center"> Teamcenter Admin Configuration and installation </Text>
                        
                    </Box>

                    {/* P3 */}

                </Box>
                <Box  minWidth={{ base: "100%", md: "18%" }} display="flex" alignItems="center" justifyContent="center" bgColor="gray.100" boxShadow="lg"  borderRadius="25px" border="2px solid" borderColor="teal">
                    <Box >
                        {/* <Image src="./p1.webp" alt="profile" boxSize={550} h={250} /> */}
                        <Text p={4} fontSize="18px" fontWeight="600" textAlign="center">Teamcenter Customization (ITK, SOA)</Text>
                        
                    </Box>


                    {/* P2 */}
                    

                </Box>
                <Box  minWidth={{ base: "100%", md: "18%" }} display="flex" alignItems="center" justifyContent="center" bgColor="gray.100" boxShadow="lg"  borderRadius="25px" border="2px solid" borderColor="teal">
                    <Box >
                        {/* <Image src="./p2.webp" alt="profile" boxSize={650} h={250} /> */}
                        <Text p={4} fontSize="18px" fontWeight="600" textAlign="center">Teamcenter AWC (User, Admin, Customization)</Text>
                       
                    </Box>


                    {/* P2 */}
                    

                </Box>
                <Box minWidth={{ base: "100%", md: "initial" }} display="flex" alignItems="center" justifyContent="center" bgColor="gray.100" boxShadow="lg" borderRadius="25px" border="2px solid" borderColor="teal">
                    <Box >
                        {/* <Image src="./p3.webp" alt="profile" boxSize={650} h={250} /> */}
                        <Text p={4} fontSize="18px" fontWeight="600" textAlign="center">Basic of Programming Languages C, C++, Java Script, HTML, React JS</Text>
                        
                    </Box>


                    {/* P2 */}
                    

                </Box>
                
            </Box>
        </>
    );
};


export default Frame3;
