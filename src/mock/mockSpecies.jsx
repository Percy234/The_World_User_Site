export const mockSpecies = [
    // --- Thuộc Chi Báo (Panthera - G001) ---
    {
        species_id: "S001",
        genus_id: "G001", // Liên kết với Panthera
        normal_name: "Hổ",
        science_name: "Panthera tigris",
        description: "Loài lớn nhất trong họ Mèo, đặc trưng bởi bộ lông màu cam với các sọc đen thẳng đứng.",
        thumbnail: "/images/mockSpecies/panthera_tigris.avif"
    },
    {
        species_id: "S002",
        genus_id: "G001",
        normal_name: "Sư tử",
        science_name: "Panthera leo",
        description: "Mèo lớn sống theo bầy đàn, con đực có bờm lớn đặc trưng. Được mệnh danh là chúa tể sơn lâm.",
        thumbnail: "/images/mockSpecies/panthera_leo.avif"
    },

    // --- Thuộc Chi Chó (Canis - G003) ---
    {
        species_id: "S003",
        genus_id: "G003", // Liên kết với Canis
        normal_name: "Sói xám",
        science_name: "Canis lupus",
        description: "Thành viên lớn nhất trong họ Chó hoang dã, là tổ tiên của chó nhà, sống và săn mồi theo bầy.",
        thumbnail: "/images/mockSpecies/canis_lupus.avif"
    },

    // --- Thuộc Chi Người (Homo - G004) ---
    {
        species_id: "S004",
        genus_id: "G004", // Liên kết với Homo
        normal_name: "Người tinh khôn",
        science_name: "Homo sapiens",
        description: "Loài duy nhất còn tồn tại của chi Homo. Có trí tuệ phát triển cao, ngôn ngữ phức tạp và khả năng tạo ra công cụ tinh xảo.",
        thumbnail: "/images/mockSpecies/homo_sapiens.avif"
    },

    // --- Thuộc Chi Lúa (Oryza - G005) ---
    {
        species_id: "S005",
        genus_id: "G005", // Liên kết với Oryza
        normal_name: "Lúa tẻ (Lúa nước)",
        science_name: "Oryza sativa",
        description: "Cây lương thực quan trọng nhất châu Á, hạt gạo là nguồn tinh bột chủ yếu.",
        thumbnail: "/images/mockSpecies/oryza_sativa.avif"
    }
];

export default mockSpecies ;