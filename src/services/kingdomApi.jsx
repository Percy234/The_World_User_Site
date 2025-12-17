import mockKingdoms from "../mock/mockKingdom";

const getAllKingdoms = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "Success",
                message: "Lấy danh sách giới thành công (FAKE AIP)",
                kingdoms: mockKingdoms
            });
        })
    })
}

const getKingdomById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = mockKingdoms.find(k => k.kingdom_id === id);
            if (found) {
                resolve({
                    status: "Success",
                    kingdom: found
                });
            } else {
                reject({
                    status: "Error",
                    message: "Không tìm thấy giới"
                });
            }
        })
    });
}

export {
    getAllKingdoms,
    getKingdomById
}