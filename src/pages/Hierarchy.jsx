import { Box, Text, Flex, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { getAllKingdoms } from "../services/kingdomApi";
import { getAllPhylums } from "../services/phylumApi";
import { getAllClasses } from "../services/classApi";
import { getAllOrders } from "../services/orderApi";
import { getAllFamilies } from "../services/familyApi";
import { getAllGenus } from "../services/genusApi";
import { getAllSpecies } from "../services/speciesApi";

import Taxonomy from "../component/Taxonomy";
import TaxonomyContent from "../component/TaxonomyContent";

function Hierarchy() {
    
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
    })

    //Hàm xử lý lựa chọn cấp bậc
    const handleKingdomSelect = (kingdom) => {
        setSelectedKingdom(kingdom);
        setSelectedPhylum(null);
        setSelectedClass(null);
        setSelectedOrder(null);
        setSelectedFamily(null);
        setSelectedGenus(null);
        setSelectedSpecies(null);
    };
    const handlePhylumSelect = (phylum) => {
        setSelectedPhylum(phylum);
        setSelectedClass(null);
        setSelectedOrder(null);
        setSelectedFamily(null);
        setSelectedGenus(null);
        setSelectedSpecies(null);
    };
    const handleClassSelect = (classData) => {
        setSelectedClass(classData);
        setSelectedOrder(null);
        setSelectedFamily(null);
        setSelectedGenus(null);
        setSelectedSpecies(null);
    };
    const handleOrderSelect = (order) => {
        setSelectedOrder(order);
        setSelectedFamily(null);
        setSelectedGenus(null);
        setSelectedSpecies(null);
    };
    const handleFamilySelect = (family) => {
        setSelectedFamily(family);
        setSelectedGenus(null);
        setSelectedSpecies(null);
    };
    const handleGenusSelect = (genus) => {
        setSelectedGenus(genus);
        setSelectedSpecies(null);
    };
    const handleSpeciesSelect = (species) => {
        setSelectedSpecies(species);
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
                <Box 
                    width="320px"
                    minW="320px"
                    flexShrink={0}
                    bg="gray.100"
                >
                    {selectedKingdom && (
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
                    )}

                    {!selectedKingdom && (
                        <Text p={4} textAlign="center">
                            Vui lòng chọn một sinh vật để xem phân loại.
                        </Text>
                    )}
                </Box>
                <Box 
                    flex="1"
                    bg="gray.200"
                    overflow="auto"
                >
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
            </Flex>
        </Box>
    )
}
export default Hierarchy;