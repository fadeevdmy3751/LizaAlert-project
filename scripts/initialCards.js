const noviceLevel = 'Новичок'
const middleLevel = 'Бывалый'
const professionalLevel = 'Профессионал'
// всего 3 статуса: доступен для прохождения, в прцессе и пройден. первые два - это активные, третий- неактивный
const available = 'Записаться';
const inProgress = 'Продолжить';
const completed = 'Пройден';

const initialCards = [
  {
    img: './images/img-dog.jpg',
    imgAlt: 'Кинологическое направление',
    title: 'Кинологическое направление',
    text: 'Поисково-спасательная работа, следовая работа, а так же поиск тел погибших с помощью собак',
    lessonsAmount: '144 занятия',
    duration: '144 ч',
    level: middleLevel,
    status: inProgress,
  },
  {
    img: './images/img-call.jpg',
    imgAlt: 'Оперативные дежурные',
    title: 'Оперативные дежурные',
    text: 'Оперативное реагирование, контроль поступающих заявок и звонков, распределение задач, помощь в решении вопросов, удалённое ...',
    lessonsAmount: '144 занятия',
    duration: '144 ч',
    level: professionalLevel,
    status: available,
  },
  {
    img: './images/img-drone.jpg',
    imgAlt: 'Беспилотные летательные аппараты',
    title: 'Беспилотные летательные аппараты',
    text: 'Применение БПЛА в поиске людей, а так же передача полученной с помощью техники информации спасательным службам',
    lessonsAmount: '144 занятия',
    duration: '144 ч',
    level: middleLevel,
    status: available,
  },
  {
    img: './images/img-med.jpg',
    imgAlt: 'Первая помощь',
    title: 'Первая помощь',
    text: 'Основы оказания первой помощи на поиске, юридические аспекты, базовые алгоритмы, разбор ошибок при оказания помощи на поиске',
    lessonsAmount: '144 занятия',
    duration: '144 ч',
    level: middleLevel,
    status: available,
  },
  {
    img: './images/img-notes.jpg',
    imgAlt: 'Инфогруппа',
    title: 'Инфогруппа',
    text: 'Создание ориентировок, заказ карт, связь через мини АТС, обеспечение поиска',
    lessonsAmount: '144 занятия',
    duration: '144 ч',
    level: noviceLevel,
    status: completed,
  },
  {
    img: './images/img-hotline.jpg',
    imgAlt: 'Операторы 8-800',
    title: 'Операторы 8-800',
    text: 'Приём заявок на поиск людей с последующей передачей информации инфоргам',
    lessonsAmount: '144 занятия',
    duration: '144 ч',
    level: noviceLevel,
    status: available,
  },
  {
    img: './images/img-operator.jpg',
    imgAlt: 'Группа коротких прозвонов',
    title: 'Группа коротких прозвонов',
    text: 'Прозвон больниц, ОВД, различных ведомств, иногда свидетелей и возможных свидетелей',
    lessonsAmount: '144 занятия',
    duration: '144 ч',
    level: noviceLevel,
    status: available,
  },
  {
    img: './images/img-group.jpg',
    imgAlt: 'Новичковая',
    title: 'Новичковая',
    text: 'Короткое описание курса. людей в лесу и в городе. Все поисковые мероприятия организуются силами добровольцев «ЛизаАлер…',
    lessonsAmount: '144 занятия',
    duration: '144 ч',
    level: noviceLevel,
    status: completed,
  }
];
