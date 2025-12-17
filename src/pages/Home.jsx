import { Box, Image, Text, Flex } from "@chakra-ui/react";
import Share from "../component/Share";
import AnimalContent from "../component/Animal-Content.jsx";
import ApiTest from "../test/testApi.jsx";

function Home() {
    return(
        <Box>
            <Box position="relative" width="100%" height="580px">
                <Image 
                    src="/images/home/Home-hero.jpg"
                    height="100%"
                    width="100%"
                    objectFit="cover"
                    alt="Home-Slide"
                />
                <Text
                    position="absolute"
                    bottom="40px"
                    left="50px"
                    color="white"
                    fontSize="4xl"
                    fontWeight="bold"
                    textShadow="2px 2px 8px rgba(0,0,0,0.7)"
                >
                    Green knowledge for a sustainable Earth.
                </Text>
            </Box>
            <Share/>
            <Box maxW="90%" mx="auto" marginTop="20px">
                <Flex direction={{ base: "column", md: "row" }}>
                    {/* Phần Content của Animal */}
                    <Box bg="white" height="auto" maxHeight="800px">
                        {/* <ApiTest/> */}
                        <AnimalContent />
                    </Box>
                    
                </Flex>
            </Box>
        </Box>
    )
}

export default Home;