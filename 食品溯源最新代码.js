// 食品溯源数据配置
const foodTraceabilityData = {
    "1": {
        id: "1",
        name: "青稞",
        origin: "青海省湟源县青稞种植基地",
        producer: "创意新农风团队",
        plantingDate: "2025-05-01",
        harvestDate: "2025-10-15",
        processingDate: "2025-10-20",
        expiryDate: "2026-10-20",
        qualityInspection: "合格",
        transportation: "常温运输、冷链运输",
        distributor: "合作商"
    }
};

// 获取食品数据
function getFoodData(foodId) {
    return foodTraceabilityData[foodId] || null;
}

// 获取所有食品ID列表
function getAllFoodIds() {
    return Object.keys(foodTraceabilityData);
}

// 验证食品数据完整性
function validateFoodData(food) {
    const requiredFields = ['id', 'name', 'origin', 'producer'];
    return requiredFields.every(field => food[field]);
}

// 暴露全局变量以便在非模块模式下使用
if (typeof window !== 'undefined') {
    window.foodTraceabilityData = foodTraceabilityData;
    window.getFoodData = getFoodData;
    window.getAllFoodIds = getAllFoodIds;
    window.validateFoodData = validateFoodData;
}

// 同时支持ES6模块导入
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        foodTraceabilityData,
        getFoodData,
        getAllFoodIds,
        validateFoodData
    };
}
