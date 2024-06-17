import React, { useState } from 'react';
import { Box, Text, Divider, Icon, useMediaQuery } from '@chakra-ui/react';
import { CheckCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Dropdown = ({ isOpen, toggleDropdown, moduleNumber, moduleName, items }) => (
    <>
        <Box display="flex" flexDirection="row" width={{ base: "100%", md: "55%" }} borderTop="1px solid" borderColor="gray.300" p={6} justifyContent="space-between" alignItems="center">
            <Box display="flex" flexDirection="row" gap={2}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    background="#f4f4f4"
                    borderRadius="50%"
                    padding={{ base: "2px", md: "4px" }}
                    mt={{ base: 2, md: "initial" }}
                    w={7}
                    h={7}
                >
                    <Text fontSize="15px" fontWeight="700">{moduleNumber}</Text>
                </Box>
                <Text fontWeight="700" fontSize={{ base: "15px", md: "16px" }} mt={1}>{moduleName}</Text>
            </Box>
            <Icon as={isOpen ? ChevronUpIcon : ChevronDownIcon} fontSize="22px" cursor="pointer" mt={1} onClick={toggleDropdown} />
        </Box>
        {isOpen && (
            <Box display="flex" width={{ base: "100%", md: "55%" }} background="#f4f4f4" p={4} flexDirection="column" gap={4}>
                {items.map((item, index) => (
                    <Box key={index} display="flex" alignItems="center" width={{ base: "100%", md: "80%" }}>
                        <Icon as={CheckCircleIcon} w={5} h={5} color="gray.300" mr={2} />
                        <Text textAlign="justify" fontSize={{ base: "15px", md: "18px" }}>
                            {item}
                        </Text>
                    </Box>
                ))}
            </Box>
        )}
    </>
);

const Frame6 = () => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const modules = [
        {
            number: "1",
            name: "Data Science",
            items: [
               " Data categorising types and Data cleaning",
                "Predictive Analysis and Predictive Modelling",
               " Decision Tree Calculating Support", 
                "Confidence and Lift to Derive Rules",
                "Control the complexity of an association rule"  ,
                "Deriving 3 - and 4 - Itemset",
            ]
        },
        {
            number: "2",
            name: "Machine Learning",
            items: [
                "Supervised and unsupervised learning approaches","Covariance and Correlation Building",
                "Training and Evaluating a Classifier Model",
                "Building and Evaluating KNN and Perceptron Models",
                "Building and Evaluating Random Forest",
                "XGBoost Classifier Models"
            ]
        },
        {
            number: "3",
            name: "Artificial Intelligence",
            items: [
               " Text Processing"," Sentiment Analysis", "Image Recognition", "Recommendation systems Video Analysis",
              "Deep Learning Model" ,"Building an AI Classifier ", "Applying Ant Colony Optimisation (ACO) and Particle Swarm Optimisation (PSO) for Feature Selection in Classification"
            ]
        }
    ];

    return (
        <Box>
            <Divider borderColor="gray.300" mt={8} />

            <Box position="relative" display="flex" p={{ base: 4, md: 2 }} justifyContent="center" alignItems="center" fontFamily="Arial" flexDirection="column">
                <Text fontSize={{ base: "24px", md: "40px" }} textAlign="center" fontFamily="GT Sectra Fine" fontWeight="700" mb={5}>Projects and Assignments</Text>

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
                <Divider borderColor="gray.300"  width={{base:"100%" , md:"55%"}} />
                <Text fontSize="14px" width={{base:"100%" , md:"55%"}} textAlign="center" mt={5}>Note: Modules/ topics are indicative only, and the suggested time and sequence may be dropped/ modified/ adapted to fit the total programme hours.</Text>
            </Box>
        </Box>
    );
};

export default Frame6;
