import { Box, Flex, VStack, Heading, Text, Button, Image, Grid, GridItem } from "@chakra-ui/react";
import { 
    provied_cell_types, 
    provided_nutrition_types, 
    provided_reproduction_types 
} from "../config/data.config";
import { useState } from "react";
// import useBreakPoints from "../hooks/useBreakPoints";
function TaxonomyContent({
    kingdoms, phylums, classes, orders, families, genus, species,
    selectedKingdom, selectedPhylum, selectedClass, selectedOrder, selectedFamily, selectedGenus, selectedSpecies,
    onKingdomSelect, onPhylumSelect, onClassSelect, onOrderSelect, onFamilySelect, onGenusSelect, onSpeciesSelect
}) {
    
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    })
    
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
    return (
        <Box p={4}>
            <Heading size="lg" mb={6}>Nội dung Chi tiết & Lựa chọn Cấp con</Heading>

            {/* HIỂN THỊ CHI TIẾT CỦA CẤP ĐANG ĐƯỢC CHỌN SÂU NHẤT */}
            {deepestSelectedItem && (
                <Box mb={8} p={4} bg="white" boxShadow="md" borderRadius="md">
                    <Flex
                        direction={ width < 2000 ? "column" : "row" }
                        align="flex-start"
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
                            <Grid>
                                <Heading size="md" mb={2}>
                                    {deepestSelectedItem.normal_name} ({deepestSelectedItem.science_name})
                                </Heading>
                                <Text mb={2}>
                                    <strong>Mô tả:</strong> {deepestSelectedItem.description || "Chưa có mô tả."}
                                </Text>
                            </Grid>
                            
                        </Box>
                    </Flex>
                </Box>
            )}

            
            {/* DANH SÁCH LỰA CHỌN CẤP TIẾP THEO (Nếu chưa phải là cấp cuối cùng) */}
            {listData.length > 0 && (
                <Box>
                    <Heading size="md" mb={3}>{currentTitle}</Heading>
                    <Grid templateColumns={"repeat(3, 1fr)"} gap={2}>
                        {listData.map((item, index) => (
                            <GridItem key={index}>
                                <Button
                                    w={"100%"}
                                    key={item.id || index}
                                    variant={item.id === currentSelectedId?.id ? "solid" : "outline"}
                                    colorScheme="blue"
                                    p={12}
                                    borderLeft={"3px solid"}
                                    borderColor={"blue.900"}
                                    onClick={() => currentHandler(item)}
                                    justifyContent="flex-start"
                                    shadow={"md"}
                                >
                                    <Text
                                        fontSize="2xl"
                                        letterSpacing={1}
                                        fontWeight="bold"
                                        textTransform={"uppercase"}
                                    >
                                        {item.normal_name}
                                    </Text>
                                </Button>
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