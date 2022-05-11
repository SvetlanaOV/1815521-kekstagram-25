//import {createPhotoArray} from './data.js';
import {renderFullPicture} from './fullscreen-photo.js';

const usersPictures = document.querySelector('.pictures');
const usersPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

//const pictures = createPhotoArray();

const similarListFragment = document.createDocumentFragment();

const renderPicture = ({url, description, comments, likes}) => {
  const pictureElement = usersPicturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  pictureElement.addEventListener('click', () => {
    renderFullPicture(url, description, likes, comments);
  });
  similarListFragment.append(pictureElement);
};

const renderAllPictures = (pictures) => {
  pictures.forEach(renderPicture);
  usersPictures.append(similarListFragment);
};

//renderAllPictures();

export {renderAllPictures};
