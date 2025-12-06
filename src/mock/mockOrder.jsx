export const mockOrders = [
    // --- Thuộc Lớp Thú (Mammalia - C001) ---
    {
        order_id: "O001",
        class_id: "C001", // Liên kết với Mammalia
        normal_name: "Bộ Ăn thịt",
        science_name: "Carnivora",
        description: "Các loài thú chuyên ăn thịt, có răng nanh phát triển và vuốt sắc nhọn (chó, mèo, gấu, hổ).",
        thumbnail: "/images/mockOrders/carnivora.avif"
    },
    {
        order_id: "O002",
        class_id: "C001",
        normal_name: "Bộ Linh trưởng",
        science_name: "Primates",
        description: "Nhóm thú có não bộ phát triển, tay cầm nắm linh hoạt, mắt hướng về phía trước (khỉ, vượn, người).",
        thumbnail: "/images/mockOrders/primates.avif"
    },
    {
        order_id: "O003",
        class_id: "C001",
        normal_name: "Bộ Guốc chẵn",
        science_name: "Artiodactyla",
        description: "Các loài thú móng guốc có số ngón chân chẵn, thường là động vật ăn cỏ (bò, hươu, lợn, lạc đà).",
        thumbnail: "/images/mockOrders/artiodactyla.avif"
    },

    // --- Thuộc Lớp Chim (Aves - C002) ---
    {
        order_id: "O004",
        class_id: "C002", // Liên kết với Aves
        normal_name: "Bộ Sẻ",
        science_name: "Passeriformes",
        description: "Bộ chim lớn nhất, chân có cấu tạo thích nghi để đậu bám cành cây, thường hót hay.",
        thumbnail: "/images/mockOrders/passeriformes.avif"
    },

    // --- Thuộc Lớp Côn trùng (Insecta - C006) ---
    {
        order_id: "O005",
        class_id: "C006", // Liên kết với Insecta
        normal_name: "Bộ Cánh vẩy",
        science_name: "Lepidoptera",
        description: "Bao gồm bướm ngày và bướm đêm (ngài), cánh phủ lớp phấn (vảy) nhỏ li ti.",
        thumbnail: "/images/mockOrders/lepidoptera.avif"
    },
    {
        order_id: "O006",
        class_id: "C006",
        normal_name: "Bộ Cánh cứng",
        science_name: "Coleoptera",
        description: "Bộ động vật lớn nhất thế giới, đôi cánh trước hóa cứng thành vỏ bảo vệ (bọ cánh cứng).",
        thumbnail: "/images/mockOrders/coleoptera.avif"
    },

    // --- Thuộc Lớp Hai lá mầm (Magnoliopsida - C010) ---
    {
        order_id: "O007",
        class_id: "C010", // Liên kết với Magnoliopsida
        normal_name: "Bộ Hoa hồng",
        science_name: "Rosales",
        description: "Nhóm thực vật có hoa bao gồm hoa hồng, dâu tây, táo và nhiều loại cây ăn quả quan trọng.",
        thumbnail: "/images/mockOrders/rosales.avif"
    },
    {
        order_id: "O008",
        class_id: "C010",
        normal_name: "Bộ Đậu",
        science_name: "Fabales",
        description: "Thực vật có quả dạng quả đậu, rễ thường cộng sinh với vi khuẩn cố định đạm.",
        thumbnail: "/images/mockOrders/fabales.avif"
    },

     // --- Thuộc Lớp Một lá mầm (Liliopsida - C011) ---
     {
        order_id: "O009",
        class_id: "C011", // Liên kết với Liliopsida
        normal_name: "Bộ Hòa thảo (Lúa)",
        science_name: "Poales",
        description: "Nhóm thực vật quan trọng nhất về kinh tế, bao gồm lúa, ngô, lúa mì, tre, cỏ.",
        thumbnail: "/images/mockOrders/poales.avif"
    }
];

export default mockOrders;