const filters = document.querySelectorAll ('.filters__category');
const inputs = document.querySelectorAll('.filters__input')
const cards = document.querySelectorAll('.card')
const tags = document.querySelectorAll('.tag');
const buttonProfile = document.querySelector('.header__button-profile');
const buttonRemove = document.querySelector('.filters__reset');
const buttonsDelete = document.querySelectorAll('.tag__delete');

// аккордион отркрывается-закрывается

filters.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.target.classList.toggle('filters__category_active');
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
  });
});

// фильтр карточек

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

  inputs.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.checked) {
        buttonRemove.style.visibility = "visible";
          } else {
            buttonRemove.style.visibility = "hidden";
        };
    });
  });
}

filterCards();

// тэги уровней под фильтрами

function showTags() {
  if (document.querySelector('#novice').checked) {
    document.querySelector('.tag-novice').style.display = "flex";
  } else {
    document.querySelector('.tag-novice').style.display = "none";
  }

  if (document.querySelector('#experienced').checked) {
    document.querySelector('.tag-experienced').style.display = "flex";
  } else {
    document.querySelector('.tag-experienced').style.display = "none";
  }

  if (document.querySelector('#professional').checked) {
    document.querySelector('.tag-professional').style.display = "flex";
  } else {
    document.querySelector('.tag-professional').style.display = "none";
  }
}
// взаимоисключаюшиеся фильтры


//открытие профиля по клику в header

buttonProfile.addEventListener('click', function () {
  window.open('profile.html');
  }
)

// кнопка очистить

function removeFilters() {
  inputs.forEach(function(el) {
    el.checked = false;
  });
  showTags();
  buttonRemove.style.visibility = "hidden";
}

buttonRemove.addEventListener('click', removeFilters)

// кнопка тэга удалить

function deleteTags() {
  tags.forEach(function (el){
  if (el.classList.contains('.tag-novice')) {
    document.querySelector('#novice').checked = false;
  }

   else if (el.classList.contains('.tag-experienced')) {
    document.querySelector('#experienced').checked = false;
  }

  else if (el.classList.contains('.tag-professional')) {
    document.querySelector('#professional').checked = false;
  }
})
}


buttonsDelete.forEach(function (el) {
  el.addEventListener('click', function (evt) {
    const parentTag = evt.target.closest('.tag');
      deleteTags(parentTag);
      showTags();
  });
})
