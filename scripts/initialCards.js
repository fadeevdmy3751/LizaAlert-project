const noviceLevel = 'Новичок'
const middleLevel = 'Бывалый'
const professionalLevel = 'Профессионал'
// всего 3 статуса: доступен для прохождения, в прцессе и пройден. первые два - это активные, третий- неактивный
const available = 'available';
const inProgress = 'inProgress';
const completed = 'completed';

const initialCards = [
  {
    img: './images/img-dog.jpg',
    title: 'Кинологическое направление',
    text: 'Поисково-спасательная работа, следовая работа, а так же поиск тел погибших с помощью собак',
    classesAmount: '144 занятия',
    duration: '144 ч',
    level: middleLevel,
    status: inProgress,
  },
  {
    img: './images/img-call.jpg',
    title: 'Оперативные дежурные',
    text: 'Оперативное реагирование, контроль поступающих заявок и звонков, распределение задач, помощь в решении вопросов, удалённое ...',
    classesAmount: '144 занятия',
    duration: '144 ч',
    level: professionalLevel,
    status: available,
  },
  {
    img: './images/img-drone.jpg',
    title: 'Беспилотные летательные аппараты',
    text: 'Применение БПЛА в поиске людей, а так же передача полученной с помощью техники информации спасательным службам',
    classesAmount: '144 занятия',
    duration: '144 ч',
    level: middleLevel,
    status: available,
  },
  {
    img: './images/img-med.jpg',
    title: 'Первая помощь',
    text: 'Основы оказания первой помощи на поиске, юридические аспекты, базовые алгоритмы, разбор ошибок при оказания помощи на поиске',
    classesAmount: '144 занятия',
    duration: '144 ч',
    level: middleLevel,
    status: available,
  },
  {
    img: './images/img-notes.jpg',
    title: 'Инфогруппа',
    text: 'Создание ориентировок, заказ карт, связь через мини АТС, обеспечение поиска',
    classesAmount: '144 занятия',
    duration: '144 ч',
    level: noviceLevel,
    status: completed,
  },
  {
    img: './images/img-hotline.jpg',
    title: 'Операторы 8-800',
    text: 'Приём заявок на поиск людей с последующей передачей информации инфоргам',
    classesAmount: '144 занятия',
    duration: '144 ч',
    level: noviceLevel,
    status: available,
  },
  {
    img: './images/img-operator.jpg',
    title: 'Группа коротких прозвонов',
    text: 'Прозвон больниц, ОВД, различных ведомств, иногда свидетелей и возможных свидетелей',
    classesAmount: '144 занятия',
    duration: '144 ч',
    level: noviceLevel,
    status: available,
  },
  {
    img: './images/img-group.jpg',
    title: 'Новичковая',
    text: 'Короткое описание курса. людей в лесу и в городе. Все поисковые мероприятия организуются силами добровольцев «ЛизаАлер…',
    classesAmount: '144 занятия',
    duration: '144 ч',
    level: noviceLevel,
    status: completed,
  }
];
