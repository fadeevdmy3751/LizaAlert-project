const filters = document.querySelectorAll ('.filters__category');
const inputs = document.querySelectorAll('.filters__input') // все чекбоксы
const cards = document.querySelectorAll('.card') // gone down to cards
const cardsContainer = document.querySelector(".cards");
const buttonProfile = document.querySelector('.header__button-profile');
const buttonCourses = document.querySelector('.header__button-courses');
const buttonClean = document.querySelector('.filters__remove');
const buttonsDeleteTag = document.querySelectorAll('.tag__delete');

const activeChk = document.querySelector('#active');
const inactiveChk = document.querySelector('#not-active');

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
  })
})

function filter (category, cards) {
  cards.forEach((card) => {
    // проверяем категорию
    const isItemFiltered = !card.classList.contains(category) // переписать кака будет
    // если категории нет,прячем
    if (isItemFiltered) {
      card.classList.add('hide')
      // удаляем класс hide
    } else {
      card.classList.remove('hide')
    }
  })
}
// лиснеры на чекбоксы, +- работают, доработать фильтер
inputs.forEach((item) => {
  item.addEventListener("click", (el) => {
    if (el.target.id === 'active' && el.target.checked === true) inactiveChk.checked = false;
    if (el.target.id === 'not-active' && el.target.checked === true) activeChk.checked = false;
    const currentCategory = item.dataset.filter;
    filter(currentCategory, cards);
    checkButtonRemove();
  });
});

// фильтр карточек commented
// not working
// function filterCards() {
//   function filter (category, cards) {
//     cards.forEach((card) => {
//     // проверяем категорию
//       const isItemFiltered = !card.classList.contains(category)
//     // если категории нет,прячем
//         if (isItemFiltered) {
//           card.classList.add('hide')
//     // удаляем класс hide
//             } else {
//             card.classList.remove('hide')
//             }
//     })
//   }
//   inputs.forEach((item) => {
//     item.addEventListener("click", () => {
//       const currentCategory = item.dataset.filter;
//       filter(currentCategory, cards);
//       checkButtonRemove();
//     });
//   });
// }

// filterCards(); вызывать по кликам, изначальный перенесен выше

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

//открытие по клику в header
buttonProfile.addEventListener('click', function () {
  location = 'profile.html';
  }
)
buttonCourses.addEventListener('click', function () {
  location = 'index.html';
  }
)

// кнопка очистить

function removeFilters() {
  inputs.forEach(function(el) {
    el.checked = false;
    checkButtonRemove();
  });
  showTags();
}

buttonClean.addEventListener('click', removeFilters)

// кнопка тэга удалить

function deleteTags(tag) {
  if (tag.classList.contains('tag-novice')) {
    document.querySelector('#novice').checked = false;
  }

  if (tag.classList.contains('tag-experienced')) {
    document.querySelector('#experienced').checked = false;
  }

  if (tag.classList.contains('tag-professional')) {
    document.querySelector('#professional').checked = false;
  }
}
//
buttonsDeleteTag.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    const parentTag = evt.target.closest('.tag');
      deleteTags(parentTag);
      showTags();
      checkButtonRemove();
    });
})

// состояние кнопки очистить

/// карты
const cardsTemplate = document.querySelector(".cards-template");
function checkButtonRemove() {
  buttonClean.style.visibility=document.querySelectorAll(":checked").length ? 'visible': 'hidden';
}
function createCard (obj) {
  const newCard = cardsTemplate.content.cloneNode(true);

  newCard.querySelector(".card__image").src = obj.img;
  newCard.querySelector(".card__image").alt = obj.imgAlt;
  newCard.querySelector(".card__title").textContent = obj.title;
  newCard.querySelector(".card__status").textContent = obj.level;
  newCard.querySelector(".card__description").textContent = obj.text;
  newCard.querySelector(".card__lessons").textContent = obj.lessonsAmount;
  newCard.querySelector(".card__clock").textContent = obj.duration;
  newCard.querySelector(".card__button").textContent = obj.status;
//TODO классы в зависимости от статуса добавить (и создать)

  // setListenerCards(newCard);

  return newCard;

}

function renderCard() {
  cardsContainer.innerHTML = '';
  initialCards.forEach(el => {
    const newCard = createCard(el);
    // console.log(newCard);
    cardsContainer.append(newCard);
  });
}

renderCard();

