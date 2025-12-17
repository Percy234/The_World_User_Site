import mockGenus from '../mock/mockGenus';

const getAllGenus = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "Success",
                message: "Lấy danh sách chi thành công (FAKE API)",
                genus: mockGenus
            });
        })
    });
}

const getGenusById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = mockGenus.find(g => g.genus_id === id);
            if (found) {
                resolve({
                    status: "Success",
                    genus: found
                });
            } else {
                reject({
                    status: "Error",
                    message: "Không tìm thấy chi"
                });
            }
        });
    });
}

export {
    getAllGenus,
    getGenusById
}