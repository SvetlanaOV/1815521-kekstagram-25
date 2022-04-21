//Поле со значением текущего масштаба изображения
const scaleControlValue = document.querySelector('.scale__control--value');
//Кнопка уменьшения масштаба изображения
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
//Кнопка увеличения масштаба изображения
const scaleControlBigger = document.querySelector('.scale__control--bigger');

const photoUploadPreview = document.querySelector('.img-upload__preview');

//Максимальное значение масштаба изображения
const MAX_SCALE_VALUE = 100;
//Минимальное значение масштаба изображения
const MIN_SCALE_VALUE = 25;
//Шаг изменения
const SCALE_STEP = 25;
//Начальное значение поля масштаба изображения
scaleControlValue.value = `${MAX_SCALE_VALUE}%`;


//Функция уменьшающая масштаб изображения
const onScaleReduceButton = () => {
  let scale = parseInt(scaleControlValue.value, 10);//Нашла в инете - но что оно делает??
  if (scale > MIN_SCALE_VALUE) {
    scale -= SCALE_STEP;
    scaleControlValue.value = `${scale}%`;
    photoUploadPreview.style.transform = `scale(${scale / 100})`;
  }
};

//Функция увеличивающая масштаб изображения
const onScaleIncreaseButton = () => {
  let scale = parseInt(scaleControlValue.value, 10);
  if (scale < MAX_SCALE_VALUE) {
    scale += SCALE_STEP;
    scaleControlValue.value = `${scale}%`;
    photoUploadPreview.style.transform = `scale(${scale / 100})`;
  }
};

//Функция добавляет EventListener на кнопки + и -
const addScaleListeners = () => {
  scaleControlSmaller.addEventListener('click', onScaleReduceButton);
  scaleControlBigger.addEventListener('click', onScaleIncreaseButton);
  scaleControlValue.value = `${MAX_SCALE_VALUE}%`;
  photoUploadPreview.style.transform = 'none';
};

//Функция удаляет EventListener с кнопок + и -
const removeScaleListeners = () => {
  scaleControlSmaller.addEventListener('click', onScaleReduceButton);
  scaleControlBigger.addEventListener('click', onScaleIncreaseButton);
};

export {addScaleListeners, removeScaleListeners};
