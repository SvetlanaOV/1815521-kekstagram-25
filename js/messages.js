//Критерии 3.4, 3.5 - показ сообщения об успешной отправке фото или об ошибке

import {isEscapeKey} from './util.js';
//Сообщение об ошибке при отправке данных
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

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

let keydownListener;
let clickListener;

let errorWhileDownloading;

const removeListeners = () => {
  document.removeEventListener('keydown', keydownListener);
  document.removeEventListener('click', clickListener);
};

const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  const errorTitle = errorMessage.querySelector('.error__title');
  const errorButton = errorMessage.querySelector('.error__button');

  if (errorWhileDownloading) {
    errorTitle.textContent = 'Ошибка загрузки данных';
    errorButton.textContent = 'Ок';
  }

  const closeErrorMessage = () => {
    errorMessage.remove();
    removeListeners();
  };

  const onImageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeErrorMessage();
    }
  };

  const onClick = (evt) => {
    if (evt.target === errorButton || !evt.target.closest('.error__inner')) {
      closeErrorMessage();
    }
  };

  document.addEventListener('keydown', onImageEscKeydown);
  document.addEventListener('click', onClick);

  document.body.append(errorMessage);
};

const showDownloadErrorMessage = () => {
  errorWhileDownloading = true;
  showErrorMessage();
};

const showUploadErrorMessage = () => {
  errorWhileDownloading = false;
  showErrorMessage();
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  const successButton = successMessage.querySelector('.success__button');

  const closeSuccessMessage = () => {
    successMessage.remove();
    removeListeners();
  };

  const onImageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeSuccessMessage();
    }
  };

  const onClick = (evt) => {
    if (evt.target === successButton || !evt.target.closest('.success__inner')) {
      closeSuccessMessage();
    }
  };

  document.addEventListener('keydown', onImageEscKeydown);
  document.addEventListener('click', onClick);

  document.body.append(successMessage);
};

export {showAlert, showDownloadErrorMessage, showUploadErrorMessage, showSuccessMessage};
