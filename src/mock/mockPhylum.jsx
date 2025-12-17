export const mockPhylums = [
    // --- Thuộc giới Động vật (Animalia - K001) ---
    {
        phylum_id: "P001",
        kingdom_id: "K001", // Liên kết với Animalia
        normal_name: "Dây sống",
        science_name: "Chordata",
        description: "Động vật có dây sống, bao gồm động vật có xương sống (như người, thú, cá) và một số loài không xương sống.",
        thumbnail: "/images/mockPhylums/chordata.avif"
    },
    {
        phylum_id: "P002",
        kingdom_id: "K001",
        normal_name: "Chân khớp",
        science_name: "Arthropoda",
        description: "Ngành lớn nhất trong giới động vật, có bộ xương ngoài bằng kitin và cơ thể phân đốt (côn trùng, nhện, tôm cua).",
        thumbnail: "/images/mockPhylums/arthropoda.avif"
    },
    {
        phylum_id: "P003",
        kingdom_id: "K001",
        normal_name: "Thân mềm",
        science_name: "Mollusca",
        description: "Động vật có cơ thể mềm, thường có vỏ đá vôi bảo vệ (ốc, trai, mực, bạch tuộc).",
        thumbnail: "/images/mockPhylums/mollusca.avif"
    },

    // --- Thuộc giới Thực vật (Plantae - K002) ---
    {
        phylum_id: "P004",
        kingdom_id: "K002", // Liên kết với Plantae
        normal_name: "Thực vật có hoa (Hạt kín)",
        science_name: "Anthophyta", // Hoặc Magnoliophyta
        description: "Nhóm thực vật đa dạng nhất, có hoa và hạt được bảo vệ bên trong quả.",
        thumbnail: "/images/mockPhylums/anthophyta.avif"
    },
    {
        phylum_id: "P005",
        kingdom_id: "K002",
        normal_name: "Thông (Hạt trần)",
        science_name: "Pinophyta", // Hoặc Gymnospermae
        description: "Thực vật có hạt nhưng không có hoa và quả, hạt thường nằm lộ trên các lá noãn hở (nón).",
        thumbnail: "/images/mockPhylums/pinophyta.avif"
    },

    // --- Thuộc giới Nấm (Fungi - K003) ---
    {
        phylum_id: "P006",
        kingdom_id: "K003", // Liên kết với Fungi
        normal_name: "Nấm đảm",
        science_name: "Basidiomycota",
        description: "Nhóm nấm phổ biến nhất bao gồm các loại nấm ăn, nấm độc có mũ nấm.",
        thumbnail: "/images/mockPhylums/basidiomycota.avif"
    },
    {
        phylum_id: "P007",
        kingdom_id: "K003",
        normal_name: "Nấm túi",
        science_name: "Ascomycota",
        description: "Nhóm nấm lớn nhất, bào tử sinh ra trong các túi (nang), bao gồm nấm men và nấm mốc.",
        thumbnail: "/images/mockPhylums/ascomycota.avif"
    }
];

export default mockPhylums;