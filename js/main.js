import './picture-list.js';
import {
  onUploadFormClose
} from './upload-form.js';
import {
  setUserFormSubmit
} from './form-validation.js';
import {
  renderAllPictures
} from './picture-list.js';

fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((pictures) => {
    renderAllPictures(pictures);
  });

setUserFormSubmit(onUploadFormClose);
