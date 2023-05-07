const Task10 = (size = 4) => {
    const title = "Вычислите произведение и частное нечетких чисел \\verb|LR-типа| A_{LR} и B_{LR}, представленных в виде < a_1, \\alpha_{1}, \\beta_{1} > и < b_1, \\alpha_{2}, \\beta_{2} > . Ответ укажите в виде двух троек чисел в таком же формате через точку с запятой. Например{:} 1 0 0;3 0 2. При необходимости округлите результат до сотых.";
    const A = Array.from({ length: 3 }, () => Math.floor(Math.random() * 9 ) + 1);
    const B = Array.from({ length: 3 }, () => Math.floor(Math.random() * 9 ) + 1);
    const taskBody =`A_{LR} = <${A.join(', ')}>; \n B_{LR} = <${B.join(', ')}>`;
    const multiply = [A[0]*B[0], A[0]*B[1]+B[0]*A[1], A[0]*B[2]+B[0]*A[2]];
    const divide = [
        (A[0]/B[0]).toFixed(2),
        ((A[0]*B[2]+B[0]*A[1])/Math.pow(B[0], 2)).toFixed(2),
        ((A[0]*B[1]+B[0]*A[2])/Math.pow(B[0], 2)).toFixed(2),
    ]
    const answer = `${multiply.join(' ')};${divide.join(' ')}`;
    return {
        id: 10, title, taskBody, answer
    };
}

module.exports = Task10;