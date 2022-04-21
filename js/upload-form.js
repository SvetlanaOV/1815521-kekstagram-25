import {isEscapeKey} from './util.js';
import {addScaleListeners, removeScaleListeners} from './photo-scale-control.js';
import {createSlider, addEffectsListener, removeEffectsListener, resetEffect, removeSlider} from './photo-effects-control.js';

const pictureUploadForm = document.querySelector('.img-upload__form');
const pictureUploadInput = document.querySelector('.img-upload__input');
const pictureUploadOverlay = document.querySelector('.img-upload__overlay ');
const pictureUplodeFormClose = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

//Открытие и закрытие окна загрузки изображения
const onFullscreenPhotoEscKeydown = (evt) => {
  const focus = evt.target.matches('.text__hashtags:focus') || evt.target.matches('textarea:focus');
  if (focus) {
    return evt.stopPropagation();
  }

  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onUploadFormClose();
  }
};

function onUploadFormOpen() {
  pictureUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onFullscreenPhotoEscKeydown);
  //Добавляю Listener на нопки + и -
  addScaleListeners();
  //Добавляю слайдер эффектов на страницу
  createSlider();
  //Добавляет обратчик по клику на эффект изображения
  addEffectsListener();
}

function onUploadFormClose() {
  pictureUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onFullscreenPhotoEscKeydown);
  removeScaleListeners();

  //Удаляет обратчик по клику на эффект изображения
  removeEffectsListener();
  //Возвращает эффект к стандартному
  resetEffect();
  //Уничтожает слайдер
  removeSlider();

  pictureUploadForm.reset();
  pictureUploadInput.value = '';
}

pictureUploadInput.addEventListener('click', onUploadFormOpen);

pictureUplodeFormClose.addEventListener('click', onUploadFormClose);
