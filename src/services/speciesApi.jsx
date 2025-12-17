import mockSpecies from "../mock/mockSpecies";

const getAllSpecies = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "Success",
                message: "Lấy danh sách loài thành công (FAKE API)",
                species: mockSpecies
            });
        })
    });
}

const getSpeciesById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const found = mockSpecies.find(s => s.species_id === id);
            if (found) {
                resolve({
                    status: "Success",
                    species: found
                });
            } else {
                reject({
                    status: "Error",
                    message: "Không tìm thấy loài"
                });
            }
        });
    });
}

export {
    getAllSpecies,
    getSpeciesById
}