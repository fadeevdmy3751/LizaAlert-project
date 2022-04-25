//открытие курсов по клику в header
const buttonCourses = document.querySelector('.header__button-courses');

buttonCourses.addEventListener('click', function () {
  window.open('index.html');
  }
)


//////////// Работа с кнопками форм ////////////
const profilePage = document.querySelector('.profile-content');

const formButtons = profilePage.querySelectorAll('.form__submit-btn'); //Выбираем все кнопки

function changeButton (elem) {
  elem.classList.remove('form__submit-btn_type_unsubmitted');
  elem.classList.add('form__submit-btn_type_submitted');
}

// formButtons.forEach((element) => {
//   element.addEventListener('click', changeButton (element));
// })
