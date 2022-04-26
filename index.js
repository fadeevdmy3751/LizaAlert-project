/* const filters = document.querySelectorAll ('.filter');
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

filterCards(); */


const cards = document.querySelector(".cards");
const cardsTemplate = document.querySelector(".cards-template");
const initialCards = [
  {
    img: './images/dog.png',
    title: 'Кинологическое направление',
    text: 'Поисково-спасательная работа, следовая работа, а так же поиск тел погибших с помощью собак'
  },
  {
    img: './images/dog.png',
    title: 'Оперативные дежурные',
    text: 'Оперативное реагирование, контроль поступающих заявок и звонков, распределение задач, помощь в решении вопросов, удалённое ...'
  },
  {
    img: './images/dog.png',
    title: 'Беспилотные летательные аппараты',
    text: 'Применение БПЛА в поиске людей, а так же передача полученной с помощью техники информации спасательным службам'
  },
  {
    img: './images/dog.png',
    title: 'Первая помощь',
    text: 'Основы оказания первой помощи на поиске, юридические аспекты, базовые алгоритмы, разбор ошибок при оказания помощи на поиске'
  },
  {
    img: './images/dog.png',
    title: 'Инфогруппа',
    text: 'Создание ориентировок, заказ карт, связь через мини АТС, обеспечение поиска'
  },
  {
    img: './images/dog.png',
    title: 'Операторы 8-800',
    text: 'Приём заявок на поиск людей с последующей передачей информации инфоргам'
  },
  {
    img: './images/dog.png',
    title: 'Группа коротких прозвонов',
    text: 'Прозвон больниц, ОВД, различных ведомств, иногда свидетелей и возможных свидетелей'
  },
  {
    img: './images/dog.png',
    title: 'Новичковая',
    text: 'Короткое описание курса. людей в лесу и в городе. Все поисковые мероприятия организуются силами добровольцев «ЛизаАлер…'
  }
];


function createCard (obj) {
  const newCard = cardsTemplate.content.cloneNode(true);

  newCard.querySelector(".card__image").src = obj.img;
  newCard.querySelector(".card__title").textContent = obj.title;
  newCard.querySelector(".card__description").textContent = obj.text;
  
  setListenerCards(newCard);
  
  return newCard;

}

function renderCard() {
  initialCards.forEach(function(el){
    /* console.log(renderCards(el)); */
    cards.append(createCard(el));
  });
}

renderCard();