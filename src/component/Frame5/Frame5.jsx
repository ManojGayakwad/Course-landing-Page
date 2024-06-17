import React, { useState } from 'react';
import { Box, Text, Divider, useMediaQuery } from '@chakra-ui/react';
import Dropdown from './Dropdown';
import { modules } from './modulesData';

const Frame5 = () => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <Box>
            <Divider borderColor="gray.300" />

            <Box position="relative" display="flex" p={{ base: 4, md: 2 }} justifyContent="center" alignItems="center" fontFamily="Arial" flexDirection="column">
                <Text fontSize={{ base: "24px", md: "40px" }} textAlign="center" fontFamily="GT Sectra Fine" fontWeight="700" mb={5}>Programme Modules</Text>

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
                <Divider borderColor="gray.300"  width={{base:"100%" , md:"55%"}}/> 
                <Text fontSize="14px"  width={{base:"100%" , md:"55%"}} mt={5}>Note: Modules/ topics are indicative only, and the suggested time and sequence may be dropped/ modified/ adapted to fit the total programme hours.</Text>
            </Box>
            
        </Box>
    );
};

export default Frame5;
