import {
  onFullscreenPhotoOpen,
  onFullscreenPhotoClose
} from './fullscreen-modal.js';

const picturePhoto = document.querySelector('.big-picture__img img');
const fullscreenUserPhotoClose = document.querySelector('.big-picture__cancel');
const pictureLikeCounter = document.querySelector('.likes-count');
const pictureCommentCounter = document.querySelector('.comments-count');
const pictureDescription = document.querySelector('.social__caption');

const commentsList = document.querySelector('.social__comments');
const commentItem = document.querySelector('.social__comment');

const similarListFragment = document.createDocumentFragment();

const renderComment = ({
  avatar,
  name,
  message
}) => {
  const comment = commentItem.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  comment.classList.add('hidden');
  similarListFragment.append(comment);
};

const renderAllComments = (comments) => {
  commentsList.innerHTML = '';
  comments.forEach(renderComment);
  commentsList.append(similarListFragment);
};

//Переменные для скрытия счетчика лайков
const commentsLoader = document.querySelector('.social__comments-loader');
const commentsLoaded = document.querySelector('.comments-load');

//Показ одного комментария
const openOneComment = () => {
  const firstHiddenComment = document.querySelector('.social__comment.hidden');
  if (firstHiddenComment === null) {
    return;}
  firstHiddenComment.classList.remove('hidden');
};

const openNextComments = () => {
  const COMMENTS_TO_SHOW = 5;
  for (let i = 0; i < COMMENTS_TO_SHOW; i++) {
    openOneComment();
  }

  commentsLoaded.textContent = document.querySelectorAll('.social__comment:not(.hidden)').length;
  const firstHiddenComment = document.querySelector('.social__comment.hidden');
  if (firstHiddenComment === null) {
    commentsLoader.classList.add('hidden');
    commentsLoader.removeEventListener('click', openNextComments);
  }
};

const renderFullPicture = (url, description, likes, comments) => {
  commentsLoader.classList.remove('hidden');

  onFullscreenPhotoOpen();
  picturePhoto.src = url;
  pictureLikeCounter.textContent = likes;
  pictureCommentCounter.textContent = comments.length;
  commentsLoaded.textContent = 0;
  pictureDescription.textContent = description;
  renderAllComments(comments);

  openNextComments();
  commentsLoader.addEventListener('click', openNextComments);

  fullscreenUserPhotoClose.addEventListener('click', () => {
    onFullscreenPhotoClose();
  });
};

export {
  renderFullPicture
};
