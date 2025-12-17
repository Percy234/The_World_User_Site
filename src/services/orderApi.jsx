import mockOrders from '../mock/mockOrder';

const getAllOrders = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "Success",
                message: "Lấy danh sách bộ thành công (FAKE API)",
                orders: mockOrders
            });
        })
    });
}
const getOrderById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = mockOrders.find(o => o.order_id === id);
            if (found) {
                resolve({
                    status: "Success",
                    order: found
                });
            } else {
                reject({
                    status: "Error",
                    message: "Không tìm thấy bộ"
                });
            }
        });
    });
}

export {
    getAllOrders,
    getOrderById
}