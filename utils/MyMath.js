class MyMath {
    static sum = (a, b) => a + b;
    static sub = (a, b) => a - b;
    static multy = (a, b) => a * b;
    static div = (a, b) => a / b;
}


/* Экспортируем один объект MyMath и больше ничего -->
  
module.exports = MyMath;

*/


/* Экспортируем объект, в котором лежат класс MyMath, анонимная функция, константа -->

module.exports.MyMath = MyMath;
module.exports.superFunc = function () {};
module.exports.constant = 'value';

*/


// делаем по сути то же самое, что и во втором варианте
module.exports = {
    MyMath,
    superFunc: () => {},
    constant: 'value'
}
