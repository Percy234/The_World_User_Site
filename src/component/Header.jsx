import { 
    Box,
    HStack, 
    Flex, Image,
    Heading, 
    Spacer, 
    Link, 
    Button 
} from "@chakra-ui/react";
{/* Link as RouterLink là để tích hợp CSS của Chakra và 
điều hướng của react-router-dom */}
import { Link as RouterLink } from "react-router-dom";
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Header() {
    const header = useRef();

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(header.current,
                {
                    y: -100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                }
            )
        }, header);
        return () => ctx.revert();
    }, []);

    return(
        <Box 
        ref={header}
        width="100%"
        bg="whiteAlpha.200"
        backdropBlur={10}
        // opacity={0.95}
        color="green" 
        px={6} 
        py={2} 
        boxShadow="md"
        position="sticky"
        top="-100"
        zIndex="1000"
        >
            <Flex 
            align="center">
                {/* Phần Logo của web */}
                <Link 
                    as={RouterLink} 
                    to="/" 
                    _hover={{ textDecoration: "none" }}
                >
                    <HStack spacing={3}>
                        <Image 
                            src="/images/logo/logo.png"
                            alt="Logo"
                            boxSize="60px"
                        />
                        <Heading as="h1" size="md">
                            The Earth
                        </Heading>
                    </HStack>
                </Link>

                {/* Phần navbar */}
                <HStack 
                ml={10}
                display={"flex"}
                items="center"
                spacing={6}>
                    <Link 
                        as={RouterLink} 
                        to="/" fontSize="lg" 
                        fontWeight="semibold"
                        _hover={{ textDecoration: "none", color: "black" }}
                    >
                        Home
                    </Link>
                    <Link 
                        as={RouterLink} 
                        to="/hierarchy" fontSize="lg" 
                        fontWeight="semibold"
                        _hover={{ textDecoration: "none", color: "black" }}
                    >
                        Hierarchy
                    </Link>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Header;