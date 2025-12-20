import { Box,Text } from "@chakra-ui/react";

function Taxonomy({
        selectedKingdom, selectedPhylum, selectedClass, selectedOrder, selectedFamily, selectedGenus, selectedSpecies,
        onKingdomSelect, onPhylumSelect, onClassSelect, onOrderSelect, onFamilySelect, onGenusSelect, onSpeciesSelect
    }) {
    const levels = [
        { level: "kingdom", data: selectedKingdom, handler: onKingdomSelect },
        { level: "phylum", data: selectedPhylum, handler: onPhylumSelect },
        { level: "class", data: selectedClass, handler: onClassSelect },
        { level: "order", data: selectedOrder, handler: onOrderSelect },
        { level: "family", data: selectedFamily, handler: onFamilySelect },
        { level: "genus", data: selectedGenus, handler: onGenusSelect },
        { level: "species", data: selectedSpecies && selectedSpecies[0], handler: onSpeciesSelect },
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
                        onClick={() => item.handler(null, item.level)}
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
                                    <Text fontSize="sm" fontWeight="bold">
                                        {item.normal_name}
                                    </Text>
                                    <Text fontSize="xs" color="gray.600" fontStyle="italic">
                                        {item.science_name}
                                    </Text>
                                </Box>
                            </Box>
                            
                        ) : (
                            <Box ml={4}>
                                <Text fontSize="sm" fontWeight="bold">
                                    {item.normal_name}
                                </Text>
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