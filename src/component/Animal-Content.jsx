import { Box, Text, Button, Image, SimpleGrid, Flex, Tag, TagLabel } from "@chakra-ui/react"
import TIGERS from "../data/tigers.json"

function AnimalContent(){
    const TAG_COLOR = {
        "Ăn thịt": "red",
        "Sống trên cạn": "green",
    };
    return (
        <>
            <Box position="relative" height={{ base: "300px", md: "500px" }} overflow="hidden">
                <Image 
                    src="/images/home/Animal_hero.jpg"
                    height="100%"
                    width="100%"
                    objectFit="cover"
                    alt="Home-Slide"
                />
                <Box position="absolute" top="40px" left="30px">
                    <Text
                        fontSize={{ base: "4vw", md: "3vw"}}
                        fontWeight="700"
                        color="white"
                        textShadow="-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black,
                                    0 -2px 0 black,  0 2px 0 black, -2px 0 0 black, 2px 0 0 black;"
                    >
                        Discover, Appreciate & Understand the Animal World!
                    </Text>
                    <Text
                        mt={4}
                        fontSize={{ base: "1.5vw", md: "2vw" }}
                        fontWeight="700"
                        maxW="500px"
                        color="white"
                        textShadow="-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;"
                    >
                        Let's explore the wild{" "} 
                        <Text as="span" color="#00703c">
                            animal
                        </Text>{" "}
                        world on our planet together.
                    </Text>
                    <Button
                        mt={6}
                        bg=" #00703c"
                        color="white"
                        fontSize={{ base: "2vw", md: "1.2vw" }}
                        fontWeight="600"
                        px={{ base: 6, md: 8 }}
                        py={{ base: 3, md: 4 }}
                        borderRadius="8px"
                        _hover={{ bg: "black", transform: "scale(1.05)" }}
                        transition="all 0.2s ease"
                    >
                        Explore Now!
                    </Button>
                </Box>
            </Box>
            <Box>
                <Text
                    mt={3}
                    fontSize="18px"
                >
                    Knowledge about animal species not only helps us understand their physical traits, 
                    biological structures, and behaviors, but also provides deep insight into 
                    how nature works as an interconnected system. Every species plays a vital role in 
                    maintaining ecological balance — from tiny pollinating insects to top predators that 
                    regulate entire food chains. Studying animals reveals fascinating adaptations, 
                    such as camouflage, seasonal migration, and communication through sound or chemical signals.
                </Text>
                <Box
                    height="10px"
                    width="100px"
                    bg="#00703c"
                    mt={4}
                />
                <Box
                    mt={-2}
                    fontSize="4xl"
                    fontWeight="semibold"
                >
                    Discover animals now!
                </Box>
            </Box>
            <SimpleGrid 
                columns={{ base: 1, sm: 2, md: 4 }} 
                spacing={6}
                margin="0 8px"
            >
                {TIGERS.species.map((tiger, index) => (
                    <Box
                        key={index}
                        bg="white"
                        borderRadius="8px"
                        boxShadow="md"
                        overflow="hidden"
                        _hover={{ transform: "scale(1.02)", boxShadow: "xl" }}
                    >
                        <Image
                            src={tiger.img}
                            alt={tiger.common_name}
                            width="100%"
                            height="250px"
                            objectFit="cover"
                        />
                        <Box pt={1} px={3} pb={4}>
                            <Text
                                fontSize="12px"
                            >
                                {tiger.name}
                            </Text>
                            <Text
                                fontSize="xl"
                                fontWeight="bold"
                                mb={2}
                                // textAlign="center"
                            >
                                {tiger.common_name}
                            </Text>
                            <Flex>
                                {tiger.tags.map((tag, tagIndex) => (
                                    <Tag
                                        key={tagIndex}
                                        size="sm"
                                        borderRadius="4px"
                                        variant="solid"
                                        colorScheme={TAG_COLOR[tag] || "gray"}
                                        mr={2}
                                        mb={2}
                                    >
                                        <TagLabel fontWeight="bold">{tag}</TagLabel>
                                    </Tag>
                                ))}
                            </Flex>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </>
    )
}
export default AnimalContent;