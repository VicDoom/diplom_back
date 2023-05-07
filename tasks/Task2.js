const generateFuzzySet = require("../helpers/generateFuzzySet");
const Task2 = (size = 4) => {
    const [muValues, taskBody] = generateFuzzySet(size, 'A');
    const answer = String(muValues.reduce((sum, value) => sum + value, 0).toFixed(1));
    const title = `Найдите мощность нечеткого множества, заданного в горизонтальной форме. Укажите его значение в виде десятичного числа.`;
    return {
        id: 2, title, taskBody, answer
    };
}

module.exports = Task2;