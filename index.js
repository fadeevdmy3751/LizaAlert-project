const filters = document.querySelectorAll ('.filter');

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
const checkboxes = document.querySelectorAll('.filter__input')
const cards = document.querySelectorAll('.card')

function filter (category, items) {
  items.forEach((item) => {
    // проверяем категорию
    const isItemFiltered = !item.classList.contains(category)
    // если категории нет,прячем
    if (isItemFiltered) {
      item.classList.add('hide')
// удаляем класс hide
      } else {
        item.classList.remove('hide')
    }
  })
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    const currentCategory = checkbox.dataset.filter;
    filter(currentCategory, cards);
  });
});
}

filterCards();

