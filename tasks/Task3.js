const generateFuzzySet = require("../helpers/generateFuzzySet");
const Task3 = (size = 4) => {
    const letters = [ 'a', 'b', 'c', 'd', 'e' ];
    const [muValues, taskBody] = generateFuzzySet(size, 'A');
    const answer = letters.filter((value, index) => muValues[index] > 0).join(' ');
    const title = `Найдите носитель нечеткого множества, заданного в горизонтальной форме. Укажите все элементы найденного множества через пробел в том порядке в каком они представлены в исходном множестве.`;
    return {
        id: 3, title, taskBody, answer
    };
}

module.exports = Task3;