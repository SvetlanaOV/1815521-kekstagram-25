//Функция для проверки максимальной длины строки
//Использованы данные с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
function checkMaxLength(comment, maxLength) {
  return comment.length <= maxLength;
}

checkMaxLength('Hello', 10);

const getRandomInt = (min, max) => {
  if (min < 0) {
    throw 'Incorrect \'min\' value';
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return min + Math.floor(Math.random() * (max - min + 1));
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';


export {getRandomInt, shuffleArray, getRandomArrayElement, isEscapeKey};
