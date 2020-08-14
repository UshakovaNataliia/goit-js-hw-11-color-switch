// Есть массив цветов в hex-формате и кнопки Start и Stop.


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const startRef = document.querySelector('button[data-action="start"]');
const stopRef = document.querySelector('button[data-action="stop"]');

let colorCounter = null;
let startCounter = false;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

startRef.addEventListener('click', colorizeStart);
stopRef.addEventListener('click', colorizeStop);

function colorizeStart () {
    if(startCounter === false){
        colorCounter = setInterval(()=> {
            let color = randomIntegerFromInterval(0, colors.length - 1);
                     body.style.background = colors[color];
             console.log('Color!');
             startCounter = true;
         }, 1000);
    }
};


function colorizeStop () {
    clearInterval(colorCounter);
    startCounter = false;
    console.log('Stop color');
};

// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body 
// на случайное значение из массива используя инлайн-стиль. 
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. 
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), 
// используй функцию randomIntegerFromInterval.




