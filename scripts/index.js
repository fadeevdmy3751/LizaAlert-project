const filters = document.querySelectorAll ('.filter');
const inputs = document.querySelectorAll('.filter__input')
const cards = document.querySelectorAll('.card')

// аккордион отркрывается-закрывается
filters.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.target.classList.toggle('filter_active');
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
  });
});

function filterCards() {
  function filter (category, cards) {
  cards.forEach((card) => {
    // проверяем категорию
    const isItemFiltered = !card.classList.contains(category)
    // если категории нет,прячем
    if (isItemFiltered) {
      card.classList.add('hide')
// удаляем класс hide
      } else {
        card.classList.remove('hide')
    }
  });
}

inputs.forEach((item) => {
  item.addEventListener("click", () => {
    const currentCategory = item.dataset.filter;
    filter(currentCategory, cards);
  });
});
}

filterCards();

//открытие профиля по клику в header

const buttonProfile = document.querySelector('.header__button-profile');

buttonProfile.addEventListener('click', function () {
  window.open('profile.html');
  }
)



