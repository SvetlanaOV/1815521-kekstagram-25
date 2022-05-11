//Слайдер для эффектов
const sliderElement = document.querySelector('.effect-level__slider');
//Скрытое поле для записи значения эффекта для отправки на сервер
const effectLevelValue = document.querySelector('.effect-level__value');
//Список эффектов
const effectsList = document.querySelector('.effects__list');
//
const photoPreview = document.querySelector('.img-upload__preview');

const sliderContainer = document.querySelector('.img-upload__effect-level');

//Функция создает слайдер на странице
const createSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  //Функция отслеживает изменение ползунка слайдера и записывает новое значение в поле отправки на сервер
  sliderElement.noUiSlider.on('update', () => {
    effectLevelValue.value = sliderElement.noUiSlider.get();
  });

  sliderContainer.classList.add('hidden');
};

const resetEffect = () => {
  sliderContainer.classList.add('hidden');
  photoPreview.style.filter = 'none';
  effectLevelValue.value = '';
};

//Функция добавляет EventListener на список эффектов и по клику меняет настройки слайдера
const onEffectClik = () => {
  effectsList.addEventListener('change', (evt) => {
    const target = evt.target;
    sliderContainer.classList.remove('hidden');

    if (target.checked && target.value === 'none') {
      resetEffect();

    } else if (target.checked && target.value === 'chrome') {
      photoPreview.classList.add('effects__preview--chrome');

      sliderElement.noUiSlider.updateOptions({
        start: 1,
        step: 0.1,
        range: {
          min: 0,
          max: 1,
        },
        format: {
          to(value) { return value.toFixed(1); },
          from(value) { return parseFloat(value); }
        }
      });
      sliderElement.noUiSlider.on('update', () => {
        photoPreview.style.filter = `grayscale(${effectLevelValue.value})`;
      });
    } else if (target.checked && target.value === 'sepia') {
      photoPreview.classList.add('effects__preview--sepia');

      sliderElement.noUiSlider.updateOptions({
        start: 1,
        step: 0.1,
        range: {
          min: 0,
          max: 1,
        },
        format: {
          to(value) { return value.toFixed(1); },
          from(value) { return parseFloat(value); }
        }
      });
      sliderElement.noUiSlider.on('update', () => {
        photoPreview.style.filter = `sepia(${effectLevelValue.value})`;
      });
    } else if (target.checked && target.value === 'marvin') {
      photoPreview.classList.add('effects__preview--marvin');

      sliderElement.noUiSlider.updateOptions({
        start: 100,
        step: 1,
        range: {
          min: 0,
          max: 100,
        },
        format: {
          to(value) { return `${value}%`; },
          from(value) { return parseFloat(value); }
        }
      });
      sliderElement.noUiSlider.on('update', () => {
        photoPreview.style.filter = `invert(${effectLevelValue.value}%)`;
      });

    } else if (target.checked && target.value === 'phobos') {
      photoPreview.classList.add('effects__preview--phobos');

      sliderElement.noUiSlider.updateOptions({
        start: 3,
        step: 0.1,
        range: {
          min: 0,
          max: 3,
        },
        format: {
          to(value) { return `${value.toFixed(1)}px`; },
          from(value) { return parseFloat(value); }
        }
      });
      sliderElement.noUiSlider.on('update', () => {
        photoPreview.style.filter = `blur(${effectLevelValue.value}px)`;
      });
    } else {
      photoPreview.classList.add('effects__preview--heat');

      sliderElement.noUiSlider.updateOptions({
        start: 3,
        step: 0.1,
        range: {
          min: 1,
          max: 3,
        },
        format: {
          to(value) { return value.toFixed(1); },
          from(value) { return parseFloat(value); }
        }
      });
      sliderElement.noUiSlider.on('update', () => {
        photoPreview.style.filter = `brightness(${effectLevelValue.value})`;
      });
    }
  });
};

const addEffectsListener = () => {
  effectsList.addEventListener('click', onEffectClik);
};

const removeEffectsListener = () => {
  effectsList.removeEventListener('click', onEffectClik);
};

const removeSlider = () => {
  sliderElement.noUiSlider.destroy();
};

export {
  createSlider,
  addEffectsListener,
  removeEffectsListener,
  resetEffect,
  removeSlider
};
