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

function Header() {
    return(
        <Box bg="white" color="green" px={6} py={3} boxShadow="md">
            <Flex align="center">
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

                <Spacer />

                {/* Phần navbar */}
                <HStack spacing={6}>
                    <Link 
                        as={RouterLink} 
                        to="/home" fontSize="lg" 
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

                <Spacer/>
                {/* Các nút chức năng bên phải */}
                <Button 
                    bg=" #00703c"
                    color="white" 
                    variant="solid" 
                    size="sm"
                    _hover={{ bg: "black", transform: "scale(1.05)" }}
                >
                    Login
                </Button>
            </Flex>
        </Box>
    )
}

export default Header;