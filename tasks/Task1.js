const generateFuzzySet = require("../helpers/generateFuzzySet");
const Task1 = (size = 4) => {
    const letters = [ 'a', 'b', 'c', 'd', 'e' ];
    const [muValues, taskBody] = generateFuzzySet(size, 'A');
    const alphaValue = muValues[Math.floor(Math.random()) * size];
    const answer = letters.filter((value, index) => muValues[index] >= alphaValue).join(' ');
    const title = `Найдите \\verb|альфа-срез| A_{${alphaValue}} нечеткого множества, заданного в горизонтальной форме. Укажите все элементы найденного множества через пробел в том же порядке в каком они представлены в исходном множестве.`;
    return {
        id: 1, title, taskBody, answer
    };
}

module.exports = Task1;