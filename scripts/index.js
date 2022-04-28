const filters = document.querySelectorAll ('.filters__category');
const inputs = document.querySelectorAll('.filters__input') // все чекбоксы
// const cards = document.querySelectorAll('.card') // gone down to cards
const cardsTemplate = document.querySelector(".cards-template");
const cardsContainer = document.querySelector(".cards-list");
const buttonProfile = document.querySelector('.header__button-profile');
const buttonCourses = document.querySelector('.header__button-courses');
const buttonClean = document.querySelector('.filters__remove');
const buttonsDeleteTag = document.querySelectorAll('.tag__delete');
const levelFilter = document.getElementsByName('level')
const statusFilter = document.getElementsByName('status')
const activeChk = document.querySelector('#active');
const inactiveChk = document.querySelector('#not-active');

// аккордион отркрывается-закрывается

filters.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.target.classList.toggle('filters__category_active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  })
})

// function filter (category, cards) {
//   cards.forEach((card) => {
//     // проверяем категорию
//     const isItemFiltered = !card.classList.contains(category) // переписать кака будет
//     // если категории нет,прячем
//     if (isItemFiltered) {
//       card.classList.add('hide')
//       // удаляем класс hide
//     } else {
//       card.classList.remove('hide')
//     }
//   })
// }
// лиснеры на чекбоксы, +- работают, доработать фильтер
inputs.forEach((item) => {
  item.addEventListener("click", (el) => {
    if (el.target.id === 'active' && el.target.checked === true) inactiveChk.checked = false;
    if (el.target.id === 'not-active' && el.target.checked === true) activeChk.checked = false;
    // if ([...levelFilter].filter(e => e.checked).length == 3)
    //  levelFilter.forEach(e => e.checked = false)
    const currentCategory = item.dataset.filter;
    // filter(currentCategory, cards);
    // функционал по актуализации данных в масииве initialFilters
    // запуск renderCards()
    checkButtonClean();
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
//       checkButtonClean();
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
function cleanFilters() {
  inputs.forEach(function(el) {
    el.checked = false;
    //checkButtonClean();
  });
  buttonClean.style.visibility = 'hidden';
  renderCards();
  showTags();
}
buttonClean.addEventListener('click', cleanFilters)

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
      checkButtonClean();
    });
})

// состояние кнопки очистить

function checkButtonClean() {
  //todo rename с учетом renderCards
  buttonClean.style.visibility=document.querySelectorAll(":checked").length ? 'visible': 'hidden';
  renderCards();
}

function cardStatusChanged(button, title) {
  console.log(button, typeof button);//todo
  let currentCard = cards.find(card => card.initObject.title === title);
  if (currentCard.initObject.status === available) {
    button.textContent = 'Продолжить';
    button.className = 'card__button card__button_style_inProgress';
    currentCard.initObject.status = inProgress;
  }
  //console.log(cards);
  // найти карточку с нужным title
  // заменить статус
  // внести изменение в массив
}

function createCard (obj) {
  // const newCard = cardsTemplate.content.cloneNode(true);
  const newCard = cardsTemplate.content.querySelector('.card').cloneNode(true);

  newCard.querySelector(".card__image").src = obj.img;
  newCard.querySelector(".card__image").alt = obj.imgAlt;
  newCard.querySelector(".card__title").textContent = obj.title;
  newCard.querySelector(".card__level").textContent = obj.level;
  newCard.querySelector(".card__description").textContent = obj.text;
  newCard.querySelector(".card__lessons").textContent = obj.lessonsAmount;
  newCard.querySelector(".card__clock").textContent = obj.duration;
  //todo
  newCard.initObject = obj;
  const button = newCard.querySelector(".card__button");
  button.textContent = obj.status;
  button.setAttribute('onclick', `cardStatusChanged(this, '${obj.title}')`)
  switch (obj.status) {
    case available:
      button.classList.add('card__button_style_available');
      break;
    case inProgress:
      button.classList.add('card__button_style_inProgress');
      break;
    case completed:
      button.classList.add('card__button_style_completed');
      button.state='disabled'
  }
  return newCard;
}

const cards = [];
initialCards.forEach(el => cards.push(createCard(el)))

function renderCards() {
  // cardsContainer.innerHTML = '';
  while (cardsContainer.firstChild)
    cardsContainer.removeChild(cardsContainer.lastChild);
  let cardsToRender = [];
  // если переделывать рендеринг фильтров, то строчка ниже изменится
  let checkedLevels = [...levelFilter].filter(e => e.checked).map(e => e.dataset.filter);
  if (checkedLevels.length) // какието галки стоят на уровень
  {
    cardsToRender = cards.filter(e => checkedLevels.includes(e.initObject.level));
  }
  else
    cardsToRender = cards;
  //a = a.concat(b)

//todo второй фильр

  // initialCards.forEach(el => {
  //   const newCard = createCard(el);
    // console.log(newCard);
    // получаем текущее актуальное состояние фильтров
    // т.к. обращение к initialFilters[levelFilters, statusFilters]
    // заходим в levelFilters и оттуда выбираем те значения, у которых true -> кладём в actualLevelFiltersArray
    // заходим в statusFilters и оттуда выбираем те значения, у которых true -> кладём в actualStatusFiltersArray
    // if actualLevelFiltersArray.length != 0
    //    bool currentLevelExists = el[level] in actualLevelFiltersArray
    // if actualStatusFiltersArray.length != 0
    //    bool currentStatusExists = el[level] in actualStatusFiltersArray
    //
    // те фильтры, которые работают -> сверка с итерируемой карточкой
    //  if
    cardsContainer.append(...cardsToRender);
  // });
}

renderCards();

