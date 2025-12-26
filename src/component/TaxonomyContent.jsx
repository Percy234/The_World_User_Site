//Thư viện giao diện
import { Box, Flex, SlideFade, Heading, Text, Button, Image, Grid, GridItem } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
//Chuyển đổi dữ liệu
import { 
    provided_cell_types, 
    provided_nutrition_types, 
    provided_reproduction_types 
} from "../config/data.config";
import { useState } from "react";
import useBreakPoints from "../hooks/useBreakPoints";

function TaxonomyContent({
    kingdoms, phylums, classes, orders, families, genus, species,
    selectedKingdom, selectedPhylum, selectedClass, selectedOrder, selectedFamily, selectedGenus, selectedSpecies,
    onKingdomSelect, onPhylumSelect, onClassSelect, onOrderSelect, onFamilySelect, onGenusSelect, onSpeciesSelect
}) {

    const { width } = useBreakPoints();

    const STACK_BREAKPOINT = 1600 * 0.8;
    const isStacked = width < STACK_BREAKPOINT;
    
    let currentList = [];
    let currentTitle = "";
    let currentHandler = null;
    let currentSelectedId = null;
    let listData = [];

    if (!selectedKingdom) {
        currentTitle = "Chọn giới để bắt đầu";
        listData = kingdoms || [];
        currentHandler = onKingdomSelect;
        currentSelectedId = selectedKingdom;
    } else if (!selectedPhylum) {
        currentTitle = `Ngành thuộc Giới: ${selectedKingdom.normal_name}`;
        listData = (phylums || []).filter(p => p.kingdom_id === selectedKingdom.kingdom_id);
        currentHandler = onPhylumSelect;
        currentSelectedId = selectedPhylum;
    } else if (!selectedClass) {
        currentTitle = `Lớp thuộc Ngành: ${selectedPhylum.normal_name}`;
        listData = (classes || []).filter(c => c.phylum_id === selectedPhylum.phylum_id);
        currentHandler = onClassSelect;
        currentSelectedId = selectedClass;
    } else if (!selectedOrder) {
        currentTitle = `Bộ thuộc Lớp: ${selectedClass.normal_name}`;
        listData = (orders || []).filter(o => o.class_id === selectedClass.class_id);
        currentHandler = onOrderSelect;
        currentSelectedId = selectedOrder;
    } else if (!selectedFamily) {
        currentTitle = `Họ thuộc Bộ: ${selectedOrder.normal_name}`;
        listData = (families || []).filter(f => f.order_id === selectedOrder.order_id);
        currentHandler = onFamilySelect;
        currentSelectedId = selectedFamily;
    } else if (!selectedGenus) {
        currentTitle = `Chi thuộc Họ: ${selectedFamily.normal_name}`;
        listData = (genus || []).filter(g => g.family_id === selectedFamily.family_id);
        currentHandler = onGenusSelect;
        currentSelectedId = selectedGenus;
    }

    const deepestSelectedItem = 
        selectedSpecies || selectedGenus || selectedFamily || 
        selectedOrder || selectedClass || 
        selectedPhylum || selectedKingdom;

    const fadeInUp = keyframes`
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    return (
        <Box p={4}>
            <Heading
                size="lg" 
                mb={6}
                textAlign="center"
                color="#38A169"
            >
                Cấp phân loài
            </Heading>

            {/* HIỂN THỊ CHI TIẾT CỦA CẤP ĐANG ĐƯỢC CHỌN SÂU NHẤT */}
            {deepestSelectedItem && (
                <Box mb={8} p={4} bg="white" boxShadow="md" borderRadius="md">
                    <Flex
                        direction={isStacked ? "column" : "row"}
                        align="flex-start"
                        gap={6}
                    >
                        <Image
                            src={deepestSelectedItem.thumbnail_url || "images/backgrounds/placeholder.png"}
                            alt={deepestSelectedItem.science_name}
                            objectFit="cover"
                            w="500px"
                            h="400px"
                            borderRadius="md"
                        />
                        <Box>
                            <Grid
                                templateColumns="160px 1fr"
                                rowGap={3}
                                columnGap={4}
                            >
                                <Text fontWeight="bold">Tên:</Text>
                                <Text>{deepestSelectedItem.normal_name}</Text>

                                <Text fontWeight="bold">Tên khoa học:</Text>
                                <Text>{deepestSelectedItem.science_name}</Text>

                                <Text fontWeight="bold">Kiểu tế bào:</Text>
                                <Text>{provided_cell_types(deepestSelectedItem.cell_type).join(", ")}</Text>

                                <Text fontWeight="bold">Kiểu dinh dưỡng:</Text>
                                <Text>{provided_nutrition_types(deepestSelectedItem.nutrition_type).join(", ")}</Text>

                                <Text fontWeight="bold">Sinh sản:</Text>
                                <Text>{provided_reproduction_types(deepestSelectedItem.reproduction_type).join(", ")}</Text>

                                <Text fontWeight="bold">Mô tả:</Text>
                                <Text>{deepestSelectedItem.description || "Chưa có mô tả."}</Text>
                            </Grid>
                            
                        </Box>
                    </Flex>
                </Box>
            )}

            
            {/* DANH SÁCH LỰA CHỌN CẤP TIẾP THEO (Nếu chưa phải là cấp cuối cùng) */}
            {listData.length > 0 && (
                <Box>
                    <Heading size="md" mb={3}>{currentTitle}</Heading>
                    <Grid key={currentTitle} templateColumns={"repeat(3, 1fr)"} gap={2}>
                        {listData.map((item, index) => (
                            <GridItem key={item.id || index}>
                                <Box
                                    animation={`${fadeInUp} 0.6s ease-out forwards`}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                    opacity={0}
                                >
                                    <Box
                                        position="relative"
                                        w="100%"
                                        h="260px"
                                        borderRadius="md"
                                        boxShadow="md"
                                        cursor="pointer"
                                        overflow="hidden"
                                        role="group"
                                        onClick={() => currentHandler(item)}
                                    >
                                        <Image
                                            src={item.thumbnail_url || "images/backgrounds/placeholder.png"}
                                            alt={item.normal_name}
                                            w="100%"
                                            h="100%"
                                            objectFit="cover"
                                            transition="0.3s ease"
                                            _groupHover={{ 
                                                transform: "scale(1.03)", 
                                                filter: "sepia(25%) saturate(120%) brightness(1.05)"
                                            }}
                                        />
                                        <Box
                                            position="absolute"
                                            inset={0}
                                            bgGradient="linear(to-t, yellow.300, transparent)"
                                            opacity={0}
                                            _groupHover={{ opacity: 0.15 }}
                                            transition="0.3s"
                                        />
                                        <Box
                                            position="absolute"
                                            inset={0}   
                                            bgGradient="linear(to-t, blackAlpha.700, transparent)"
                                        />
                                        <Box
                                            position="absolute"
                                            bottom={0}
                                            w="100%"
                                            p={3}
                                        >
                                            <Text 
                                                color="white"
                                                fontWeight="bold"
                                                fontSize="32px"
                                            >
                                                {item.normal_name}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </GridItem>
                        ))}
                    </Grid>
                </Box>
            )}

            {/* THÔNG BÁO MẶC ĐỊNH */}
            {!deepestSelectedItem && (
                 <Text textAlign="center" py={10} color="gray.600">
                    Vui lòng chọn một giới ở danh sách trên để xem chi tiết.
                </Text>
            )}
            
        </Box>
    )
}

export default TaxonomyContent;