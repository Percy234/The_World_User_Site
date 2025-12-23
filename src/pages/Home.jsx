import { 
    Box, 
    Text, 
    Heading,
    Grid,
    GridItem,
    Badge,
    Stat,
    Image
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Home() {
    const container = useRef();
    const container_2 = useRef();
    const container_3 = useRef();
    const poster_info = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(poster_info.current,
            {
                x: -200,
                opacity: 0,
            },
            {
                x: 0,
                scrollTrigger: {
                    trigger: container.current,
                    toggleActions: "restart pause resume none",
                },
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            }
        )
        tl.fromTo(".stat_animation",
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                scrollTrigger: {
                    trigger: container.current,
                    toggleActions: "restart pause resume none",
                },
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2,
            },
        )
        
    }, {
        scope: container,
    })
    useGSAP(() => {
        gsap.fromTo(".dna-heading",
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container_2.current,
                    toggleActions: "restart pause resume none",
                }
            }
        )
        gsap.fromTo(".dna-description",
            {
                x: -100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container_2.current,
                    toggleActions: "restart pause resume none",
                }
            }
        )
        gsap.fromTo(".dna-img",
            {
                rotate: -60,
                opacity: 0,
            },
            {
                rotate: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container_2.current,
                    toggleActions: "restart pause resume none",
                }
            }
        )
    }, {
        scope: container_2,
    })
    //slide kingdoms animation
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".blue", {
            xPercent: -100,
        })
        .from(".orange", {
            xPercent: -100,
        })
        .from(".green", {
            xPercent: -100,
        })

        ScrollTrigger.create({
            animation: tl,
            trigger: container_3.current,
            start: "top top",
            end: "+=4500",
            toggleActions: "restart pause resume none",
            scrub: 1,
            pin: true,
            markers: true,
        })
    })

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
    return(
        <Box
        display={"flex"}
        flexDirection={"column"}
        >
            <Box
            ref={container}
            position="relative" 
            width="100%" 
            // transform={"translateY(-12%)"}
            minH="100vh"
            bgImage={"url('/images/home/bg/the-earth.jpg')"}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            >
                <Box
                ref={poster_info}
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
                                <GridItem key={index} colSpan={1}>
                                    <Box 
                                    className="stat_animation"
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
            ref={container_2}
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
                        className="dna-heading"
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
                        className="dna-description"
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
                                <img className="dna-img" src="/images/home/dna.svg" alt="" />
                            </Box>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
            {/* slide kingdoms */}
            <Box ref={container_3}
            position={"relative"}
            minH={"100vh"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            bgGradient={"linear(to-r, blue.400, white)"}
            >
                <Heading
                fontSize={"6xl"}
                color={"white"}
                textShadow="2px 2px 4px rgba(0,0,0,0.5)"
                mb={10}
                >
                    Các giới sinh vật trên Trái Đất
                </Heading>
                
                    {/* animal */}                        
                    <Box 
                    position={"absolute"} 
                    className="blue" 
                    w={"full"} 
                    minH={"100vh"} 
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    overflow={"hidden"}
                    >
                        {/* Video Background */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                minWidth: "100%",
                                minHeight: "100%",
                                width: "auto",
                                height: "auto",
                                transform: "translate(-50%, -50%)",
                                zIndex: 0, 
                                objectFit: "cover",
                            }}
                        >
                            <source src="/videos/kingdoms/animal-video.mp4" type="video/mp4" />
                        </video>

                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                            bgGradient={"linear(to-r, blackAlpha.700, blackAlpha.400)"}
                            zIndex={1}
                        />

                        <Grid 
                            templateColumns={"repeat(2, 1fr)"} 
                            position="relative" 
                            zIndex={2}
                        >
                            <GridItem colSpan={1}
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                px={10}

                            >
                                <Box
                                w={"300px"}
                                h={"600px"}
                                rounded={"full"}
                                left={300}
                                zIndex={-1}
                                bg={"whiteAlpha.500"}
                                position={"absolute"}
                                transform={"rotate(30deg)"}
                                ></Box>
                                <Box
                                w={"300px"}
                                h={"600px"}
                                left={150}
                                zIndex={-2}
                                rounded={"full"}
                                bg={"blackAlpha.400"}
                                position={"absolute"}
                                transform={"rotate(30deg)"}
                                ></Box>
                                <Box 
                                w={"300px"}
                                h={"300px"}
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                rounded={"full"}
                                shadow={"lg"}
                                overflow={"hidden"}
                                bg={"white"}
                                p={4}
                                >
                                    <Image
                                    src="/images/home/kingdoms/animalia-logo.svg"
                                    alt="Animalia Logo"
                                    w={"full"}
                                    h={"full"}
                                    objectFit={"cover"}
                                    >

                                    </Image>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1} px={10} color={"white"}>
                                <Heading
                                    fontSize={"7xl"}
                                    textTransform={"uppercase"}
                                    my={4}
                                    textShadow="2px 2px 4px rgba(0,0,0,0.5)"
                                >Động vật</Heading>
                                <Text
                                    fontSize={"xl"}
                                    textAlign={"justify"}
                                    textShadow="1px 1px 2px rgba(0,0,0,0.5)"
                                >
                                    Vương quốc Động vật bao gồm một loạt các sinh vật đa dạng, từ những loài nhỏ bé như côn trùng đến những loài lớn như voi và cá voi.
                                    Chúng có khả năng di chuyển, phản ứng với môi trường và thường có hệ thần kinh phát triển.
                                    Động vật đóng vai trò quan trọng trong các hệ sinh thái, góp phần duy trì sự cân bằng sinh thái và đa dạng sinh học trên Trái Đất.
                                </Text>
                            </GridItem>
                        </Grid>
                    </Box>

                    {/* plant */}
                    <Box 
                    position={"absolute"} 
                    className="orange" 
                    w={"full"} 
                    minH={"100vh"} 
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    overflow={"hidden"}
                    >
                        {/* Video Background */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                minWidth: "100%",
                                minHeight: "100%",
                                width: "auto",
                                height: "auto",
                                transform: "translate(-50%, -50%)",
                                zIndex: 0,  // Đổi thành 0
                                objectFit: "cover",
                            }}
                        >
                            <source src="/videos/kingdoms/plant-video.mp4" type="video/mp4" />
                        </video>

                        {/* Overlay gradient (tùy chọn) */}
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                            bgGradient={"linear(to-r, blackAlpha.700, blackAlpha.400)"}
                            zIndex={1}
                        />
                        <Grid 
                            templateColumns={"repeat(2, 1fr)"} 
                            position="relative" 
                            zIndex={2}
                        >
                            <GridItem colSpan={1}
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                px={10}

                            >
                                <Box
                                w={"300px"}
                                h={"600px"}
                                rounded={"full"}
                                left={300}
                                zIndex={-1}
                                bg={"green.500"}
                                position={"absolute"}
                                transform={"rotate(30deg)"}
                                ></Box>
                                <Box
                                w={"300px"}
                                h={"600px"}
                                left={150}
                                zIndex={-2}
                                rounded={"full"}
                                bg={"greenyellow"}
                                position={"absolute"}
                                transform={"rotate(30deg)"}
                                ></Box>
                                <Box 
                                w={"300px"}
                                h={"300px"}
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                rounded={"full"}
                                shadow={"lg"}
                                overflow={"hidden"}
                                bg={"green.300"}
                                p={6}
                                >
                                    <Image
                                    src="/images/home/kingdoms/plantia-logo.svg"
                                    alt="Plantia Logo"
                                    w={"full"}
                                    h={"full"}
                                    objectFit={"contain"}
                                    >

                                    </Image>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1} px={10} color={"white"}>
                                <Heading
                                    fontSize={"7xl"}
                                    textTransform={"uppercase"}
                                    my={4}
                                    textShadow="2px 2px 4px rgba(0,0,0,0.5)"
                                >Thực vật</Heading>
                                <Text
                                    fontSize={"xl"}
                                    textAlign={"justify"}
                                    textShadow="1px 1px 2px rgba(0,0,0,0.5)"
                                >
                                    Vương quốc Thực vật bao gồm các sinh vật quang hợp như cây cối, cỏ, và tảo.
                                    Chúng có khả năng chuyển đổi ánh sáng mặt trời thành năng lượng thông qua quá trình quang hợp, đóng vai trò quan trọng trong việc cung cấp oxy và duy trì chu trình carbon trên Trái Đất.
                                    Thực vật cũng là nguồn thức ăn chính cho nhiều loài động vật và con người, đồng thời góp phần tạo nên cảnh quan thiên nhiên đa dạng và phong phú.
                                </Text>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box position={"absolute"} className="green" w={"full"} minH={"100vh"} bg={"green.500"}></Box>
            </Box>
            
        </Box>
    )
}

export default Home;