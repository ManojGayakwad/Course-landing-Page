import React, { useState, useEffect } from 'react';
import { Box, Text, Divider, Image, useMediaQuery, Icon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import './frame8/frame8.css';  // Import CSS file for animations

const Frame10 = () => {
    const [isMediumScreen] = useMediaQuery("(min-width: 48em)");
    const images = [
        "./c1.webp", "./c2.webp", "./c3.webp", "./c4.webp", "./c5.webp",
        "./c6.webp", "./c7.webp", "./c8.webp", "./c9.webp", "./c10.webp"
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
        <Box position="relative" display="flex" p={{ base: 4, md: 10 }} justifyContent="center" alignItems="center"  flexDirection="column">
            <Divider borderColor="gray.300" />
            <Box mt={5}>
                <Text fontSize={{ base: "24px", md: "40px" }} textAlign="center" display="flex" justifyContent="center" alignItems="center" fontFamily="GT Sectra Fine" fontWeight="700">Past Participants of Emeritus work at</Text>

                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" mt={5} gap={48} position="relative" overflow="hidden" width="100%">
                    {currentImages.map((src, index) => (
                        <Box key={index} className={animationClasses[index]} display="flex" boxSize={28} justifyContent="center" alignItems="center">
                            <Image src={src} alt={`Image ${index + 1}`} />
                        </Box>
                    ))}
                </Box>
            </Box>
            <Divider borderColor="gray.300" mt={14} />
        </Box>
    );
}

export default Frame10;
