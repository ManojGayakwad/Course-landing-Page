import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Ribbon = () => {
    return (
        <Box position="relative" bg="#003399" color="white" fontFamily="arial" fontWeight="600">
            <Flex
                align="center"
                justify="center"
                py={2}
                px={3}
                textAlign="center"
                flexDirection={{base:"column", md:"row"}}
            >
                <Text fontSize="sm" m={0} display="inline-block">
                    Invite Your Colleague and Save INR 10,000
                </Text>
                <Text>
                    <Link
                        href="https://admissions.emeritus.org/en/refer/01tRC000000HQ9NYAW?source=ribbon"
                        isExternal
                        textDecoration="underline"
                        fontSize="sm"
                        ml={2}
                        color="white"
                        cursor='pointer'
                    >
                    Invite Now
                    </Link>
                </Text>
            </Flex>
        </Box>
    );
};

export default Ribbon;
