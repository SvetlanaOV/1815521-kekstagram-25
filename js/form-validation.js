import {
  showAlert
} from './util.js';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
  errorTextClass: 'text__label__error-text',
});

//Проверка, что нельзя указать больше пяти хэш-тегов
const MAX_HASHTAG_NUMBERS = 5;

function validateHashtagsLengts(value) {
  return value.trim().split(' ').length <= MAX_HASHTAG_NUMBERS;
}

//Проверка уникальности
function validateHashtagsUniqueness(value) {
  const hashTagArray = value.trim().toLowerCase().split(' ');
  const noDuplicate = new Set(hashTagArray);

  return hashTagArray.length === noDuplicate.size;
}

//Проверка символов хэш-тега
const tagRegExp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

function validateHashtag(value) {
  if (value === '') {
    return true;
  }
  const hashTagArray = value.trim().split(' ');
  return hashTagArray.every((hashtag) => tagRegExp.test(hashtag));
}

//Проверка длины комментария
const MAX_COMMENT_LENGTH = 140;

function validateCommentsLengts(value) {
  return value.length <= MAX_COMMENT_LENGTH;
}

const hashtagInput = document.querySelector('.text__hashtags');

pristine.addValidator(
  hashtagInput,
  validateHashtagsLengts,
  'Ой-ой, слишком много хэш-тегов, их должно быть не больше 5'
);

pristine.addValidator(
  hashtagInput,
  validateHashtagsUniqueness,
  'Ой-ой, хэш-теги не должны повторяться'
);

pristine.addValidator(
  hashtagInput,
  validateHashtag,
  'Ой-ой, хэш-тег должен начинаться с #, состоять только из букв и цифр и содержать не больше 20 символов'
);

const commentInput = document.querySelector('.text__description');

pristine.addValidator(
  commentInput,
  validateCommentsLengts,
  'Ой-ой, комментарий должен содержать не больше 140 символов'
);

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);


      fetch(
        'https://25.javascript.pages.academy/kekstagram', {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
          } else {
            showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          }
        })
        .catch(() => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        });
    }
  });
};


export {
  setUserFormSubmit
};
