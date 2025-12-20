//Chakra UI
import { Box, 
    Text, 
    Flex, 
    Spinner,
    IconButton, 
    Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerBody, 
    DrawerCloseButton, 
    useDisclosure, 
    useBreakpointValue, 
    Center
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

//Hook
import { useState, useEffect } from "react";

//Phương thức
import { getAllKingdoms } from "../services/kingdomApi";
import { getAllPhylums } from "../services/phylumApi";
import { getAllClasses } from "../services/classApi";
import { getAllOrders } from "../services/orderApi";
import { getAllFamilies } from "../services/familyApi";
import { getAllGenus } from "../services/genusApi";
import { getAllSpecies } from "../services/speciesApi";

//Layout
import Taxonomy from "../component/Taxonomy";
import TaxonomyContent from "../component/TaxonomyContent";

function Hierarchy() {
    //Gán dữ liệu
    const [kingdoms, setKingdoms] = useState([]);
    const [phylums, setPhylums] = useState([]);
    const [classes, setClasses] = useState([]);
    const [orders, setOrders] = useState([]);
    const [families, setFamilies] = useState([]);
    const [genus, setGenus] = useState([]);
    const [species, setSpecies] = useState([]);
    const [loading, setLoading] = useState(true);

    //Lựa chọn hiện tại
    const [selectedKingdom, setSelectedKingdom] = useState(null);
    const [selectedPhylum, setSelectedPhylum] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedFamily, setSelectedFamily] = useState(null);
    const [selectedGenus, setSelectedGenus] = useState(null);
    const [selectedSpecies, setSelectedSpecies] = useState(null);

    //Responsive
    const isMobile = useBreakpointValue({ base: true, md: false });
    const { isOpen, onOpen, onClose } = useDisclosure();

    //Lấy dữ liệu
    useEffect(() => {
        Promise.all([
            getAllKingdoms(),
            getAllPhylums(),
            getAllClasses(),
            getAllOrders(),
            getAllFamilies(),
            getAllGenus(),
            getAllSpecies()
        ])
        .then(([k, p, c, o, f, g, s]) => {
            setKingdoms(k.kingdoms);
            setPhylums(p.phylums);
            setClasses(c.classes);
            setOrders(o.orders);
            setFamilies(f.families);
            setGenus(g.genus);
            setSpecies(s.species);
            setLoading(false);
        })
        .catch((error) => {
            console.log("Error fetching data:", error);
            setLoading(false);
        });
    }, [])

    //Hàm xử lý lựa chọn cấp bậc
    const handleKingdomSelect = (data, level) => {
        if (data === null && level === "kingdom") {
            setSelectedKingdom(null);
            return;
        }
        setSelectedKingdom(data);
        setSelectedPhylum(null);
        setSelectedClass(null);
        setSelectedOrder(null);
        setSelectedFamily(null);
        setSelectedGenus(null);
        setSelectedSpecies(null);
    };

    const handlePhylumSelect = (data, level) => {
        if (data === null && level === "phylum") {
            setSelectedPhylum(null);
            return;
        }
        setSelectedPhylum(data);
        setSelectedClass(null);
        setSelectedOrder(null);
        setSelectedFamily(null);
        setSelectedGenus(null);
        setSelectedSpecies(null);
    };

    const handleClassSelect = (data, level) => {
        if (data === null && level === "class") {
            setSelectedClass(null);
            return;
        }
        setSelectedClass(data);
        setSelectedOrder(null);
        setSelectedFamily(null);
        setSelectedGenus(null);
        setSelectedSpecies(null);
    };

    const handleOrderSelect = (data, level) => {
        if (data === null && level === "order") {
            setSelectedOrder(null);
            return;
        }
        setSelectedOrder(data);
        setSelectedFamily(null);
        setSelectedGenus(null);
        setSelectedSpecies(null);
    };

    const handleFamilySelect = (data, level) => {
        if (data === null && level === "family") {
            setSelectedFamily(null);
            return;
        }
        setSelectedFamily(data);
        setSelectedGenus(null);
        setSelectedSpecies(null);
    };

    const handleGenusSelect = (data, level) => {
        if (data === null && level === "genus") {
            setSelectedGenus(null);
            return;
        }
        setSelectedGenus(data);
        setSelectedSpecies(null);
    };

    const handleSpeciesSelect = (data) => {
        setSelectedSpecies(data);
    };

    if (loading) {
        return (
            <Box p={6} textAlign="center">
                <Spinner size="xl" />
                <Text mt={4}>Đang tải dữ liệu...</Text>
            </Box>
        );
    }

    return (
        <Box>
            <Flex width="100%" height="100vh">
                {!isMobile && (
                    <Box
                        width="320px"
                        minW="320px"
                        flexShrink={0}
                        bg="gray.100"
                        borderRight="1px solid"
                        borderColor="gray.300"
                    >
                        {selectedKingdom ? (
                            <Taxonomy
                                selectedKingdom={selectedKingdom}
                                selectedPhylum={selectedPhylum}
                                selectedClass={selectedClass}
                                selectedOrder={selectedOrder}
                                selectedFamily={selectedFamily}
                                selectedGenus={selectedGenus}
                                selectedSpecies={selectedSpecies}

                                onKingdomSelect={handleKingdomSelect}
                                onPhylumSelect={handlePhylumSelect}
                                onClassSelect={handleClassSelect}
                                onOrderSelect={handleOrderSelect}
                                onFamilySelect={handleFamilySelect}
                                onGenusSelect={handleGenusSelect}
                                onSpeciesSelect={handleSpeciesSelect}
                            />
                        ) : (
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
                                <Text p={4} textAlign="center">
                                    Vui lòng chọn một sinh vật để xem loại.
                                </Text>
                            </Box>
                        )}
                    </Box>
                )}

                <Box flex="1" bg="gray.200" overflow="auto">
                    {isMobile && (
                        <IconButton
                            icon={<HamburgerIcon />}
                            aria-label="Open Taxonomy"
                            m={2}
                            onClick={onOpen}
                        />
                    )}

                    <TaxonomyContent
                        kingdoms={kingdoms}
                        phylums={phylums}
                        classes={classes}
                        orders={orders}
                        families={families}
                        genus={genus}
                        species={species}

                        selectedKingdom={selectedKingdom}
                        selectedPhylum={selectedPhylum}
                        selectedClass={selectedClass}
                        selectedOrder={selectedOrder}
                        selectedFamily={selectedFamily}
                        selectedGenus={selectedGenus}
                        selectedSpecies={selectedSpecies}

                        onKingdomSelect={handleKingdomSelect}
                        onPhylumSelect={handlePhylumSelect}
                        onClassSelect={handleClassSelect}
                        onOrderSelect={handleOrderSelect}
                        onFamilySelect={handleFamilySelect}
                        onGenusSelect={handleGenusSelect}
                        onSpeciesSelect={handleSpeciesSelect}
                    />
                </Box>

                <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody p={0}>
                            <Taxonomy 
                                selectedKingdom={selectedKingdom}
                                selectedPhylum={selectedPhylum}
                                selectedClass={selectedClass}
                                selectedOrder={selectedOrder}
                                selectedFamily={selectedFamily}
                                selectedGenus={selectedGenus}
                                selectedSpecies={selectedSpecies}

                                onKingdomSelect={handleKingdomSelect}
                                onPhylumSelect={handlePhylumSelect}
                                onClassSelect={handleClassSelect}
                                onOrderSelect={handleOrderSelect}
                                onFamilySelect={handleFamilySelect}
                                onGenusSelect={handleGenusSelect}
                                onSpeciesSelect={handleSpeciesSelect}
                            />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </Box>
    )
}
export default Hierarchy;