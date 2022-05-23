import './picture-list.js';
import './photo-preview.js';
import {onUploadFormClose} from './upload-form.js';
import {setUserFormSubmit} from './form-validation.js';
import {renderAllPictures} from './picture-list.js';
import {getData} from './api.js';

getData((pictures) => {
  renderAllPictures(pictures);
});

setUserFormSubmit(onUploadFormClose);
