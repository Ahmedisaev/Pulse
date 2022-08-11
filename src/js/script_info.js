// number   Указываем только цифры.
// string   Указываем информацию которой мы хотим что-то описать. Например имя человека. Содержание строки всегда обозначаем кавычками '', "", ``
// true/false   Тип информации который имеет только 2 значения: True и False.  Например: У вас открыто диалоговое окно? Если да, то ответ True если нет, то ответ False.
// null     Означет, что какого-то элемента просто не существует в природе. 
// undefined    Означает, что есть какая-то переменная но без значения. 
// let obj {    Объект в котором мы можем описать несколько значений внутри фигурных скобок.
//        name: 'apple'
//          color: 'green'
//          weight: 200
// }
//Symbol 

//const { name } = require("browser-sync");

//var name = `Akhmed`;
//alert(name) // Та информация которая находится в скобках, выводится на страницу. 

//console.log("Hello"); // Выводит информацю в консоль. В основном используется для того, чтобы выводить информацию разработчику которая нас интересует в данный момент.

//let answer = confirm(`Вам есть 18?`); // Вызывает диалоговое окно которое в котором можно ответить на вопрос нажав кнопку.

//let answer = prompt(`Вам есть 18?`, ``); // Вызывает диалоговое окно которое в котором можно написать ответ.

//console.log(answer); // Выводит информацию в консоль.

//let isChecked = true,
//    isClose = true;

//console.log(isChecked && isClose);  // && это логический оператор и. То есть, если обе переменные имеют значения true, то наша команда выводит нам значение true, если одна из переменных имеет значение false, то наша команда выводит в консоль значение false. 

//console.log(isChecked || isClose);  // || это логический оператор или. То есть, если одна из переменных имеет значение true, то наша команда выводит нам значение true.


/*if (3*5 == 15*3) {    // Внутри скобок мы пищем условие. Если оно соблюдается, то выполняется код который прописан в фигурных скобках. 
    console.log(`Верно`)
} else {              // Если условие не соблюдается, то выполняется код внутри фигурных скобок после else. 
    console.log(`Ошибка`); 
}
    */

/*
let answer = confirm(`Вам есть 18?`);
if (answer == true) {
    console.log('Добро пожаловать!')
} else {
    console.log('Вход запрешен.')
}

    */
/* 
const number = 81;

if (number < 70) {
    console.log('Мало')
} else if (number > 100) {      // Когда мы хотим сделать несколько ответвлений, то мы используем else if () и указываем доп условия.
    console.log('Много')
} else if (number == 81) {
    console.log('Предельно идеально!')
}
 else {
    console.log('Оптимально')
}


 */


//for (let i = 1; i < 8; i++) {   // Мы создаем цикл. Внутри скобок мы настраиваем цикл. Внутри круглых скобок мы всегда создаем переменную желательно с именем i и задаем ей значение. Потом мы пишем до какого момента цикл должен работать. После этого, через точку с запятой, мы пишем какую операцию проводить. 
//    console.log(i);     // В фигруных скобках пишем, какие действия выполнить после окончания цикла. 
//}


//function logging() {       // Функция только описана, она не вызывается. У функции должно быть имя. 
//    console.log(223)        // Внутри фигурных скобок прописываем действие функции.
//}

//logging();  // Так вызываем функцию.


//function calc(a, b) {       // В функции можно добавлять разные аргументы, а именно в круглые скобки
//    console.log(a + b)        
//}

//calc(5, 6);