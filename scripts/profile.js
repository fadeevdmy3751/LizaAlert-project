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
const fullNameInput = profilePage.querySelector('#full-name'); // Инпут ФИО
const accountName = profilePage.querySelector('.profile-account__name'); //ФИО в карточке пользователя

const personalDataBtn = personalDataForm.querySelector('.form__submit-btn'); // Кнопка в форме с личными данными
const accountBtn = accountForm.querySelector('.form__submit-btn'); // Кнопка в форме Аккаунт

function changeButton (button) {
  if (button.classList.contains('form__submit-btn_type_unsubmitted')) {   // Функция для изменения класса кнопки
    button.classList.remove('form__submit-btn_type_unsubmitted');
    button.classList.add('form__submit-btn_type_submitted');
    button.setAttribute("disabled", "disabled")
  } else {(button.classList.contains('form__submit-btn_type_submitted'))
    button.classList.remove('form__submit-btn_type_submitted');
    button.classList.add('form__submit-btn_type_unsubmitted');
    button.removeAttribute("disabled")
}}

function personalDataFormSubmit (evt) {
  evt.preventDefault();
  accountName.textContent = fullNameInput.value;
  let nameValue = fullNameInput.value;
  if (nameValue.length <= 3) {
    accountName.textContent = 'Иванова Анна Сидоровна';
  }
  changeButton(personalDataBtn);
  personalDataForm.reset()
}

personalDataForm.addEventListener('submit', personalDataFormSubmit); // Кнопка окрашивается в серый при нажатии в форме с личными данными;

function accountFormSubmit (evt) {
  evt.preventDefault();
  changeButton(accountBtn);
}

accountForm.addEventListener('submit', accountFormSubmit); // Кнопка окрашивается в серый при нажатии в форме Аккаунт;

const personalDataFormInputs = personalDataForm.querySelectorAll('.form__input'); // Все инпуты из формы с личными данными;
const accountFormInputs = accountForm.querySelectorAll('.form__input'); // Все инпуты из формы Аккаунт;

personalDataFormInputs.forEach(function(input) {
  input.addEventListener('focusout', function () {
    if (personalDataBtn.classList.contains('form__submit-btn_type_submitted')) {    // Кнопка окрашивается в оранжевый после ввода данных в поля Личные данные
      changeButton(personalDataBtn)
    }
  });
})

accountFormInputs.forEach(function(input) {
  input.addEventListener('focusout', function () {
    if (accountBtn.classList.contains('form__submit-btn_type_submitted')) {    // Кнопка окрашивается в оранжевый после ввода данных в поля Аккаунт
      changeButton(accountBtn)
    }
  });
})
