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

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '24px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.textTransform = 'none';
  alertContainer.style.backgroundColor = 'blue';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomInt, shuffleArray, getRandomArrayElement, isEscapeKey, showAlert};
