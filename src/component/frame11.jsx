import React, { useState } from 'react';
import { Box, Text, Divider, Icon, useMediaQuery, ListItem, UnorderedList} from '@chakra-ui/react';
import { CheckCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Dropdown = ({ isOpen, toggleDropdown, moduleNumber, moduleName, items }) => (
    <>
        <Box display="flex" flexDirection="row" width={{ base: "100%", md: "98%" }} p={{ base: 0, md: 4 }} >
            <Box display="flex" flexDirection="row" ml={{ base: 0, md: 200 }}>
                <UnorderedList spacing={2}>
                    <ListItem fontWeight="700" fontSize={{ base: "15px", md: "16px" }} ml={{ base: "10px", md: "180px" }}>{moduleName} </ListItem>
                </UnorderedList>
            </Box>

        </Box>
        {!isOpen && (
            <Box display="flex" width={{ base: "100%", md: "80%" }} flexDirection="column" gap={4} ml={{ base: 0, md: 200 }}>
                {items.map((item, index) => (
                    <Box key={index} display="flex" alignItems="center" width={{ base: "100%", md: "80%" }}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} />
                        <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }} >
                            {item}
                        </Text>
                    </Box>
                ))}
            </Box>
        )}
    </>
);

const Frame11 = () => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
    const [openDropdown, setOpenDropdown] = useState(true);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const modules = [
        {
            number: "1",
            name: "Siemens’s Training Completion Certificate",
            items: [
            ]
        },
        {
            number: "2",
            name: "One Year Training Completion Certificate",
            items: [
            ]
        },
        {
            number: "3",
            name: "Internship with Stipend",
            items: [

            ]
        },
        {
            number: "4",
            name: "Access to Prerecorded training video Library",
            items: [

            ]
        },
        {
            number: "5",
            name: "In-Depth Knowledge of PLM",
            items: [
            ]
        },
        {
            number: "6",
            name: "Hands On projects on Teamcenter ",
            items: [
            ]
        },
        {
            number: "7",
            name: "Best Quality Study Materials ",
            items: [
            ]
        }
    ];

    return (
        <Box>
            {/* <Divider borderColor="gray.300" mt={8} /> */}

            <Box position="relative" display="flex" p={{ base: 4, md: 10 }} justifyContent="center" alignItems="center" fontFamily="Arial" flexDirection="column"  >
                <Text fontSize={{ base: "24px", md: "40px" }} textAlign="center" fontFamily="GT Sectra Fine" fontWeight="700" mb={5}>Key Programme Takeaways</Text>

                {modules.map((module, index) => (
                    <Dropdown

                        key={index}
                        isOpen={openDropdown === index}
                        toggleDropdown={() => toggleDropdown(index)}
                        moduleNumber={module.number}
                        moduleName={module.name}
                        items={module.items}
                    />
                ))}

                {/* <Divider borderColor="gray.300" mt={14} /> */}
            </Box>

        </Box>
    );
};

export default Frame11;
