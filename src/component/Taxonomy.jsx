import { Box,Text } from "@chakra-ui/react";

function Taxonomy({
        selectedKingdom, selectedPhylum, selectedClass, selectedOrder, selectedFamily, selectedGenus, selectedSpecies,
        onKingdomSelect, onPhylumSelect, onClassSelect, onOrderSelect, onFamilySelect, onGenusSelect, onSpeciesSelect
    }) {
    const levels = [
        { data: selectedKingdom, handler: onKingdomSelect },
        { data: selectedPhylum, handler: onPhylumSelect },
        { data: selectedClass, handler: onClassSelect },
        { data: selectedOrder, handler: onOrderSelect },
        { data: selectedFamily, handler: onFamilySelect },
        { data: selectedGenus, handler: onGenusSelect },
        { data: selectedSpecies && selectedSpecies[0], handler: onSpeciesSelect },
    ];

    const taxonomyList = levels
        .filter(l => l.data)
        .map(l => ({ ...l.data, handler: l.handler }));
    
    return (
        <Box>
            <Text 
                textAlign="center"
                fontSize="large"
                fontWeight="bold"
                padding={4}
                borderBottom="1px solid #b4b6baff"
            >
                Phân loại sinh vật
            </Text>

            {taxonomyList.map((item, index) => {
                const indent = index * 30;

                return (
                    <Box 
                        key={index} 
                        pl={`${indent}px`} 
                        position="relative"
                        py={2}
                        cursor="pointer"
                        _hover={{ bg: "gray.200" }} 
                        onClick={() => item.handler(item)}
                    >
                        {index > 0 ? (
                            <Box display="flex" alignItems="flex-start">
                                <Text
                                    fontSize="sm"
                                    color="gray.500"
                                    mr={2}
                                    lineHeight="30px"
                                    whiteSpace="nowrap"
                                >
                                    └──
                                </Text>
                                <Box>
                                    {/* Tên thường */}
                                    <Text fontSize="sm" fontWeight="bold">
                                        {item.normal_name}
                                    </Text>

                                    {/* Tên khoa học */}
                                    <Text fontSize="xs" color="gray.600" fontStyle="italic">
                                        {item.science_name}
                                    </Text>
                                </Box>
                            </Box>
                            
                        ) : (
                            <Box ml={4}>
                                {/* Tên thường */}
                                <Text fontSize="sm" fontWeight="bold">
                                    {item.normal_name}
                                </Text>

                                {/* Tên khoa học */}
                                <Text fontSize="xs" color="gray.600" fontStyle="italic">
                                    {item.science_name}
                                </Text>
                            </Box>
                        )}
                    </Box>
                )
            })}
        </Box>
    )
}

export default Taxonomy;