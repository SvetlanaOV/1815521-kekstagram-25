const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__start input[type=file]');
const photoUploadForm = document.querySelector('.img-upload__form');
const photoInput = photoUploadForm.querySelector('.img-upload__input');
const photoPreview = photoUploadForm.querySelector('.img-upload__preview img');
const photoEffectsPreview = photoUploadForm.querySelectorAll('.effects__preview');

const DEFAULT_PREVIEW_IMAGE = 'img/upload-default-image.jpg';

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    photoPreview.src = URL.createObjectURL(file);
  }
});

function resetFileInput() {
  photoInput.value = '';

  photoPreview.src = DEFAULT_PREVIEW_IMAGE;
  photoEffectsPreview.src = DEFAULT_PREVIEW_IMAGE;
}

export {resetFileInput};
