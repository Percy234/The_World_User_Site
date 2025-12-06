import { Box, Text, Grid, Image, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllKingdoms } from "../services/kingdomApi";

function Hierarchy() {
     const [kingdoms, setKingdoms] = useState([]);
     const navigate = useNavigate();

    useEffect(() => {
        getAllKingdoms()
            .then(data => setKingdoms(data.kingdoms))
            .catch(err => console.log(err));
    }, []);

    const handleKingdomClick = (kingdomId) => {
        navigate(`/kingdom/${kingdomId}`);
    }

    return (
        <>
            <Box p={6}>
                <Heading mb={6} textAlign="center">Phân loại giới sinh vật</Heading>
                <Grid 
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)"
                    }}
                    gap={6}
                >
                    {kingdoms.map(k => (
                        <Box 
                            key={k.kingdom_id}
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            _hover={{ boxShadow: "2xl", transform: "translateY(-8px)" }}
                            cursor="pointer"
                            transition="0.2s"
                            onClick={() => handleKingdomClick(k.kingdom_id)}
                        >
                            <Box
                                position="relative"
                            >
                                <Image
                                    src={k.thumbnail_url}
                                    alt={k.science_name}
                                    objectFit="cover"
                                    w="100%"
                                    h={{ base: "280px", md: "320px", lg: "350px" }}
                                />
                                <Box
                                    position="absolute"
                                    inset={0}
                                    bgGradient="linear(to-t, transparent 60%, blackAlpha.800)"
                                >
                                    <Box
                                        position="absolute"
                                        color="white"
                                        bottom={4}
                                        left={4}
                                    >
                                        <Text fontSize={{ base: "sm", md: "md" }} opacity={0.9} mt={1}>
                                            {k.science_name}
                                        </Text>
                                        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
                                            {k.normal_name}
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </>
    );
}
export default Hierarchy;