const provided_cell_types = (type) => {
    if(type === 'E') return ['Tế bào nhân thực'];
    if(type === 'P') return ['Tế bào nhân sơ'];
    if(type === 'B') return ['Tế bào nhân thực', 'Tế bào nhân sơ'];
    return [];
};

const provided_nutrition_types = (type) => {
    if(type === 'A') return ['Tự dưỡng'];
    if(type === 'H') return ['Dị dưỡng'];
    if(type === 'M') return ['Tự dưỡng', 'Dị dưỡng'];
    return [];
};

const provided_reproduction_types = (type) => {
    if(type === 'S') return ['Sinh sản hữu tính'];
    if(type === 'A') return ['Sinh sản vô tính'];
    if(type === 'B') return ['Sinh sản hữu tính', 'Sinh sản vô tính'];
    return [];
};

export {
    provided_cell_types,
    provided_nutrition_types,
    provided_reproduction_types
};