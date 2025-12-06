const mockKingdoms = [
    {
        kingdom_id: "K001",
        normal_name: "Động vật",
        science_name: "Animalia",
        cell_type: "E", // Eukaryotic
        nutrition_mode: "H", // Heterotroph
        reproduction_type: "B", // Both
        description: "Giới sinh vật nhân thực, đa bào, không có thành tế bào và có khả năng vận động.",
        thumbnail_url: "/images/mockKingdoms/animalia.avif"
    },
    {
        kingdom_id: "K002",
        normal_name: "Thực vật",
        science_name: "Plantae",
        cell_type: "E",
        nutrition_mode: "A", // Autotroph
        reproduction_type: "B",
        description: "Giới sinh vật nhân thực, đa bào, có thành tế bào cellulose và quang hợp.",
        thumbnail_url: "/images/mockKingdoms/plantae.avif"
    },
    {
        kingdom_id: "K003",
        normal_name: "Nấm",
        science_name: "Fungi",
        cell_type: "E",
        nutrition_mode: "H",
        reproduction_type: "B",
        description: "Nấm là sinh vật nhân thực, không quang hợp, hấp thụ chất dinh dưỡng từ môi trường.",
        thumbnail_url: "/images/mockKingdoms/fungi.avif"
    },
    {
        kingdom_id: "K004",
        normal_name: "Khởi sinh",
        science_name: "Monera",
        cell_type: "P", // Prokaryotic
        nutrition_mode: "M", // Mixotroph
        reproduction_type: "A",
        description: "Giới sinh vật nhân sơ, đơn bào, không có nhân hoàn chỉnh.",
        thumbnail_url: "/images/mockKingdoms/monera.avif"
    },
    {
        kingdom_id: "K005",
        normal_name: "Nguyên sinh",
        science_name: "Protista",
        cell_type: "E", // Eukaryotic
        nutrition_mode: "M", // Mixotroph (Vừa tự dưỡng vừa dị dưỡng tùy loài)
        reproduction_type: "B",
        description: "Sinh vật nhân thực, phần lớn đơn bào, một số đa bào (tảo). Là giới trung gian.",
        thumbnail_url: "/images/mockKingdoms/protista.jpg"
    }
];

export default mockKingdoms;
