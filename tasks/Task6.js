const generateFuzzySet = require("../helpers/generateFuzzySet");
const Task6 = (size = 4) => {
    const title = 'Найдите Евклидово расстояние между двумя нечеткими множествами. В ответе укажите два числа через пробел{:} абсолютное и относительное Евклидово расстояния. Округлите результаты до сотых.';
    const [A, bodyA] = generateFuzzySet(size, 'A');
    const [B, bodyB] = generateFuzzySet(size, 'B');
    const EuclideanD = A.reduce((sum, muValue, index) => sum + Math.pow(muValue - B[index], 2), 0).toFixed(2);
    const RelativeEuclideanD = (EuclideanD / Math.sqrt(size)).toFixed(2);
    const taskBody = ` ${bodyA} \\newline ${bodyB}`;
    const answer = `${EuclideanD} ${RelativeEuclideanD}`;
    return {
        id: 6, title, taskBody, answer
    };
}

module.exports = Task6;