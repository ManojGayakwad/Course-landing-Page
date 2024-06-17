import React, { useState } from 'react';
import { Box, Text, Divider, Icon, useMediaQuery } from '@chakra-ui/react';
import { CheckCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Dropdown = ({ isOpen, toggleDropdown, moduleNumber, moduleName, items }) => (
    <>
        <Box display="flex" flexDirection="row" width={{ base: "100%", md: "98%" }} p={{base:0, md:4}} >
            <Box display="flex" flexDirection="row"  ml={{base:0 , md:200}}>

                <Text fontWeight="700" fontSize={{ base: "15px", md: "16px" }} >{moduleName} </Text>
            </Box>

        </Box>
        {!isOpen && (
            <Box display="flex" width={{ base: "100%", md: "80%" }} flexDirection="column" gap={4} ml={{base:0 , md:200}}>
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
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const modules = [
        {
            number: "1",
            name: "15 Recorded sessions and resources in the following categories(Please note: These sessions are not live):",
            items: [
                'Resume and Cover Letter',"Navigating Job Search", "Interview Preparation", "LinkedIn Profile Optimisation"
            ]
        },
        {
            number: "2",
            name: "Job Placement Assistance",
            items: [
                "Job openings are sourced by the CS Team and virtual hiring drives are conducted for the applicants.",
                 "Dedicated online portal for all candidates where they can apply for jobs & track past applications.",
                 "Regular job postings."
            ]
        },
        {
            number: "3",
            name: "Please note:",
            items: [
"                IIM Kozhikode or Emeritus do NOT promise or guarantee a job or progression in your current job. Career Services is only offered as a service that empowers you to manage your career proactively. Emeritus offers the Career Services mentioned here. IIM Kozhikode is NOT involved in any way and makes no commitments regarding the Career Services mentioned here.",
                "Job placement assistance is focused for students with 0 to 5 yrs of experience.",
                "This service is available only for Indian residents enrolled in select Emeritus programmes."
            ]
        }
    ];

    return (
        <Box>
            {/* <Divider borderColor="gray.300" mt={8} /> */}

            <Box position="relative" display="flex" p={{ base: 4, md: 10 }} justifyContent="center" alignItems="center" fontFamily="Arial" flexDirection="column">
                <Text fontSize={{ base: "24px", md: "40px" }} textAlign="center" fontFamily="GT Sectra Fine" fontWeight="700" mb={5}>Emeritus Career Services</Text>

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

                 <Divider borderColor="gray.300" mt={14} />          
                </Box>
                
        </Box>
    );
};

export default Frame11;
