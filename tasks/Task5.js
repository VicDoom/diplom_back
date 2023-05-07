const generateFuzzySet = require("../helpers/generateFuzzySet");
const Task5 = (size = 4) => {
    const title = 'Найдите Хэмингово расстояние между двумя нечеткими множествами. В ответе укажите два числа через пробел: Хэмингово и относительное Хэмингово расстояния. Округлите результаты до сотых.';
    const [A, bodyA] = generateFuzzySet(size, 'A');
    const [B, bodyB] = generateFuzzySet(size, 'B');
    const HammingD = A.reduce((sum, muValue, index) => sum + Math.abs(muValue - B[index]), 0).toFixed(1);
    const RelativeHammingD = (HammingD / size).toFixed(2);
    const taskBody = `${bodyA}; ${bodyB}`;
    const answer = `${HammingD} ${RelativeHammingD}`;
    return {
        id: 5, title, taskBody, answer
    };
}

module.exports = Task5;