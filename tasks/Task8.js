const generateFuzzySet = require("../helpers/generateFuzzySet");
const Task8 = (size = 4) => {
    const [muValues, taskBody] = generateFuzzySet(size, "A");
    const title = "Вычислите квадратичный индекс нечеткости заданного нечеткого множества. Ответ запишите в виде числа, округленного до сотых.";
    const closestSet = muValues.map(muValue => muValue < 0.5 ? 0 : 1);
    const EuclideanD = muValues.reduce((sum, muValue, index) => sum + Math.pow(muValue - closestSet[index], 2), 0).toFixed(2);
    const RelativeEuclideanD = (EuclideanD / Math.sqrt(size)).toFixed(2);
    const answer = String(2 * RelativeEuclideanD);
    return {
        id: 8, title, taskBody, answer
    };
}

module.exports = Task8;