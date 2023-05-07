const generateFuzzySet = require("../helpers/generateFuzzySet");
const Task7 = (size = 4) => {
    const [muValues, taskBody] = generateFuzzySet(size, "A");
    const title = "Вычислите линейный индекс нечеткости заданного нечеткого множества. Ответ запишите в виде числа, округленного до сотых.";
    const closestSet = muValues.map(muValue => muValue < 0.5 ? 0 : 1);
    const HammingD = muValues.reduce((sum, muValue, index) => sum + Math.abs(muValue - closestSet[index]), 0).toFixed(1);
    const RelativeHammingD = (HammingD / size).toFixed(2);
    const answer = String(2 * RelativeHammingD);
    return {
        id: 7, title, taskBody, answer
    };
}

module.exports = Task7;