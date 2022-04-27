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

function createCard (obj) {
  const newCard = cardsTemplate.content.cloneNode(true);

  newCard.querySelector(".card__image").src = obj.img;
  newCard.querySelector(".card__image").alt = obj.title;
  newCard.querySelector(".card__title").textContent = obj.title;
  newCard.querySelector(".card__status").textContent = obj.level;
  newCard.querySelector(".card__description").textContent = obj.text;
  newCard.querySelector(".card__lessons").textContent = obj.lessons;
  newCard.querySelector(".card__clock").textContent = obj.hours;

  return newCard;
}

  initialCards.forEach(function(el){
    cards.append(createCard(el));
  });
