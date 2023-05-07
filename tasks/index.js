const Task1 = require("./Task1");
const Task2 = require("./Task2");
const Task3 = require("./Task3");
const Task4 = require("./Task4");
const Task5 = require("./Task5");
const Task6 = require("./Task6");
const Task7 = require("./Task7");
const Task8 = require("./Task8");
const Task9 = require("./Task9");
const Task10 = require("./Task10");
const Task11 = require("./Task11");
module.exports = {
    Task1: { id: 1, title: 'Вычисление альфа-срезов нечеткого множества', method: Task1 },
    Task2: { id: 2, title: 'Вычисление мощности нечеткого множества', method: Task2 },
    Task3: { id: 3, title: 'Вычисление носителя нечеткого множества', method: Task3 },
    Task4: { id: 4, title: 'Вычисление высоты нечеткого множества', method: Task4 },
    Task5: { id: 5, title: 'Вычисление Хэммингово расстояния между нечеткими множествами', method: Task5 },
    Task6: { id: 6, title: 'Вычисление Евклидово расстояния между нечеткими множествами', method: Task6 },
    Task7: { id: 7, title: 'Метрический подход: вычисление линейного индекса нечеткости', method: Task7 },
    Task8: { id: 8, title: 'Метрический подход: вычисление квадратичного индекса нечеткости', method: Task8 },
    Task9: { id: 9, title: 'Операции над нечеткими числами LR-типа: сложение и вычитание', method: Task9 },
    Task10: { id: 10, title: 'Операции над нечеткими числами LR-типа: умножение и деление', method: Task10 },
    Task11: { id: 11, title: 'Операции над нечеткими числами LR-типа: возведение в целую степень', method: Task11 },
}