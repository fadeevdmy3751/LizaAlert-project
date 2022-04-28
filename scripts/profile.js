//открытие курсов по клику в header
const buttonCourses = document.querySelector('.header__button-courses');
buttonCourses.addEventListener('click', function () {
  location = 'index.html';
  }
)
const buttonProfile = document.querySelector('.header__button-profile');
buttonProfile.addEventListener('click', function () {
  location = 'profile.html';
  }
)

//////////// Работа с кнопками форм ////////////
const profilePage = document.querySelector('.profile-content');
const personalDataForm = profilePage.querySelector('.form_type_personal-data'); // Форма с личными данными
const accountForm = profilePage.querySelector('.form_type_account'); // Форма Аккаунт

const personalDataBtn = personalDataForm.querySelector('.form__submit-btn'); // Кнопка в форме с личными данными
const accountBtn = accountForm.querySelector('.form__submit-btn'); // Кнопка в форме Аккаунт

function submitBtnPressed (evt) {
  evt.preventDefault();
  const button = evt.target.querySelector('.form__submit-btn')
  button.classList.add('form__submit-btn_submitted');
  // сюда положить процессинг данных
  button.disabled = true;
}

// Кнопка окрашивается в серый при нажатии
personalDataForm.addEventListener('submit', submitBtnPressed);
accountForm.addEventListener('submit', submitBtnPressed);

const allInputs = document.querySelectorAll('.form__input'); //все инпуты

allInputs.forEach(function(input) {
  const button = input.closest('.form__fieldset').querySelector('.form__submit-btn');
  // input.addEventListener('change', function () {   // отрабатывает хуже, только после ухода с поля
  input.addEventListener('input', function () {
      button.classList.remove('form__submit-btn_submitted') ;   // Кнопка окрашивается в оранжевый после ввода данных в поля Личные данные
    button.disabled = false;
  })
})






