import mockPhylums from "../mock/mockPhylum";

const getAllPhylums = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "Success",
                message: "Lấy danh sách ngành thành công (FAKE AIP)",
                phylums: mockPhylums
            });
        })
    })
}
const getPhylumById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = mockPhylums.find(p => p.phylum_id === id);
            if (found) {
                resolve({
                    status: "Success",
                    phylum: found
                });
            } else {
                reject({
                    status: "Error",
                    message: "Không tìm thấy ngành"
                });
            }
        })
    });
}

export {
    getAllPhylums,
    getPhylumById
}