import mockFamilies from '../mock/mockFamily';

const getAllFamilies = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "Success",
                message: "Lấy danh sách họ thành công (FAKE API)",
                families: mockFamilies
            });
        })
    });
}

const getFamilyById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = mockFamilies.find(f => f.family_id === id);
            if (found) {
                resolve({
                    status: "Success",
                    family: found
                });
            } else {
                reject({
                    status: "Error",
                    message: "Không tìm thấy họ"
                });
            }
        });
    });
}

export {
    getAllFamilies,
    getFamilyById
}