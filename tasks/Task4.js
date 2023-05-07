const generateFuzzySet = require("../helpers/generateFuzzySet");
const Task4 = (size = 4) => {
    const [muValues, taskBody] = generateFuzzySet(size, 'A');
    const height = Math.max(...muValues);
    const answer = `${height} ${height === 1 ? 'нормальное' : 'субнормальное'}`;
    const title = `Найдите высоту h нечеткого множества, заданного в горизонтальной форме. Укажите ее в виде десятичного числа, а также является ли множество нормальным/субнормальным через пробел. Пример вывода: 1 нормальное.`;
    return {
        id: 4, title, taskBody, answer
    };
}

module.exports = Task4;