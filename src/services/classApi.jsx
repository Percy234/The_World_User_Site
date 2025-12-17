import mockClasses from "../mock/mockClass";

const getAllClasses = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "Success",
                message: "Lấy danh sách lớp thành công (FAKE AIP)",
                classes: mockClasses
            });
        });
    })
}

const getClassById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = mockClasses.find(c => c.class_id === id);
            if (found) {
                resolve({
                    status: "Success",
                    class: found
                });
            } else {
                reject({
                    status: "Error",
                    message: "Không tìm thấy lớp"
                });
            }
        })
    });
}

export {
    getAllClasses,
    getClassById
};