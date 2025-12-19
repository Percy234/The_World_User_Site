import { 
    Box, 
    Text, 
    Heading,
    Grid,
    GridItem,
    Badge,
    Stat,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

function Home() {

    const stats = [
        {
            label: "Loài sinh vật",
            value: "10 Triệu",
        },
        {
            label: "Diện tích là nước",
            value: "71%",
        },
        {
            label: "Năm tuổi",
            value: "4.5 Tỷ",
        }
    ]
    const fadeInBottom = keyframes`
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
    `;
    return(
        <Box
        display={"flex"}
        flexDirection={"column"}
        >
            <Box 
            position="relative" 
            width="100%" 
            // transform={"translateY(-10%)"}
            minH="100vh"
            bgImage={"url('/images/home/the-earth.jpg')"}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            >
                <Box
                position={"absolute"}
                // maxW={"30%"}
                shadow={"md"}
                borderRadius={"md"}
                bgGradient={"linear(to-r, blackAlpha.200, blackAlpha.300)"}
                backdropBlur={"lg"}
                px={12}
                top={0}
                left={"0%"}
                bottom={0}
                animation={`${fadeInBottom} 1s ease-in-out forwards`}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                >
                    <Heading
                    fontSize={"8xl"}
                    textTransform={"uppercase"}
                    letterSpacing={2}
                    color={"green.400"}
                    textShadow="0 0 16px #27cf64ff"
                    >Trái đất</Heading>

                    <Box
                    w={"30%"}
                    h={"5px"}
                    bg={"green.300"}
                    my={"4"}
                    rounded={"lg"}
                    >

                    </Box>
                    <Text
                    fontSize={"2xl"}
                    mt={4}
                    maxW={"650px"}
                    color={"gray.100"}
                    fontStyle={"italic"}
                    >
                        Ngôi nhà xanh của hơn <Badge 
                        colorScheme="green"
                        fontSize={"xl"}
                        >10 triệu</Badge> loài sinh vật.
                            Không phải là một hoàn hảo, nhưng Trát Đất là một ngôi nhà xinh dẹp của muôn loài.
                    </Text>

                    <Box
                    w={"60%"}
                    h={"2px"}
                    bg={"green.500"}
                    my={8}
                    rounded={"lg"}
                    >
                    </Box>

                    <Grid templateColumns={"repeat(3, 1fr)"} gap={4}>
                        {stats.map((stat, index) => {
                            return (
                                <GridItem colSpan={1}>
                                    <Box 
                                    border={"1px solid"}
                                    borderColor={"green.300"}
                                    borderRadius={"md"}
                                    p={4}
                                    textAlign={"center"}
                                    key={index}
                                    bg={"blackAlpha.600"}
                                    >
                                        <Text 
                                        fontSize={"3xl"} 
                                        fontWeight={"bold"} 
                                        color={"green.300"}>{stat.value}</Text>
                                        <Text fontSize={"lg"} color={"gray.200"}>{stat.label}</Text>
                                    </Box>
                                </GridItem>
                            )
                        })}
                    </Grid>
                </Box>
                
            </Box>

            {/* phần dưới poster */}
            <Box 
            minH={"100vh"}
            bg={"whiteAlpha.700"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            position={"relative"}
            >
                <Box
                w={"500px"}
                h={"500px"}
                rounded={"full"}
                shadow={"lg"}
                position={"absolute"}
                top={10}
                left={-40}
                bg={"green.200"}
                zIndex={-1}
                >

                </Box>
                <Box
                w={"450px"}
                h={"450px"}
                rounded={"full"}
                shadow={"lg"}
                position={"absolute"}
                bottom={5}
                left={60}
                bg={"blue.200"}
                zIndex={-1}
                >

                </Box>
                <Grid templateColumns={"repeat(2, 1fr)"} gap={4} p={10}>
                    <GridItem colSpan={1}>
                        <Heading
                        mb={6}
                        fontSize={"7xl"}
                        letterSpacing={4}
                        color={"green.500"}
                        >DNA</Heading>
                        <Box
                        w={"30%"}
                        h={"5px"}
                        bg={"green.300"}
                        my={"4"}
                        rounded={"lg"}
                        >

                        </Box>
                        <Text
                        fontSize={"xl"}
                        textAlign={"justify"}
                        color={"gray.700"}
                        fontWeight={"semibold"}
                        >Sự đa dạng di truyền học được góp phần từ một chuỗi xoắn nguyên bản mang tên DNA.
                            DNA quyết định mọi đặc điểm sinh học của sinh vật từ hình dáng bên ngoài đến các chức năng bên trong.
                            Sự đa dạng của DNA trong các loài sinh vật khác nhau là nền tảng cho sự đa dạng sinh học trên Trái Đất.
                            Ngày nay, việc bảo tồn và nghiên cứu DNA trở nên quan trọng hơn bao giờ hết để hiểu và bảo vệ sự sống trên hành tinh của chúng ta.
                        </Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        >
                            <Box
                            w={"350px"}
                            h={"350px"}
                            shadow={"lg"}
                            rounded={"full"}
                            backdropBlur={10}
                            bg={"green.200"}
                            >
                                <img src="/images/home/dna.svg" alt="" />
                            </Box>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
            
        </Box>
    )
}

export default Home;