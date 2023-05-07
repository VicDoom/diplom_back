const Task9 = (size = 4) => {
    const title = "Вычислите сумму и разность нечетких чисел \\verb|LR-типа| A_{LR} и B_{LR}, представленных в виде < a_1, \\alpha_{1}, \\beta_{1} > и < b_1, \\alpha_{2}, \\beta_{2} > . Ответ укажите в виде двух троек чисел в таком же формате через точку с запятой. Например{:} 1 0 0;3 0 2";
    const A = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10 ));
    const B = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10 ));
    const taskBody =`A_{LR} = <${A.join(', ')}>; \n B_{LR} = <${B.join(', ')}>`;
    const answer = `${A.map((value, index) => value + B[index]).join(' ')};${A.map((value, index) => value - B[index]).join(' ')}`
    return {
        id: 9, title, taskBody, answer
    };
}

module.exports = Task9;