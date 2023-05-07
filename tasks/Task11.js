const Task11 = (size = 4) => {
    const degreeSign = Math.random() > 0.5 ? -1 : 1;
    let degree = (Math.floor(Math.random() * 4 ) + 2);
    const title = `Возведите в {${degree * degreeSign} степень} нечеткое число \\verb|LR-типа| A_{LR}, представленного в виде < a, \\alpha, \\beta > . Ответ укажите в виде тройки чисел в таком же формате. Например{:} 1 0 0. При необходимости округлите результат до тысячных.`;
    const A = Array.from({ length: 3 }, () => Math.floor(Math.random() * 4 ) + 1);
    const taskBody =`A_{LR} = <${A.join(', ')}>`;
    let answer;
    if (degreeSign > 0) {
        answer = [Math.pow(A[0], degree), degree * Math.pow(A[0], degree-1) * A[1], degree * Math.pow(A[0], degree-1) * A[2]]
    }
    if (degreeSign < 0) {
        answer = [
            (1 / Math.pow(A[0], degree + 1)).toFixed(3),
            ((degree + 1) * A[2] / Math.pow(A[0], degree + 2)).toFixed(3),
            ((degree + 1) * A[1] / Math.pow(A[0], degree + 2)).toFixed(3),
        ]
    }
    console.log(answer);
    answer = answer.join(' ');
    return {
        id: 11, title, taskBody, answer
    };
}

module.exports = Task11;