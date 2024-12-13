import icon1 from '../assets/images/icons/v1.svg';
import icon2 from '../assets/images/icons/v2.svg';
import icon3 from '../assets/images/icons/v3.svg';
import icon4 from '../assets/images/icons/v4.svg';
import icon5 from '../assets/images/icons/v5.svg';
import icon6 from '../assets/images/icons/v6.svg';
import icon7 from '../assets/images/icons/v7.svg';
import icon8 from '../assets/images/icons/v8.svg';
import icon9 from '../assets/images/icons/v9.svg';


const localOptions = [
  {
    id: 1,
    icon: icon1,
    text: "Методический комплекс с уроками и практическими работами на 144ч.",
  },
  {
    id: 2,
    icon: icon2,
    text: "Добавление новых конкурсных полей и роботов российского рынка",
  },
  {
    id: 3,
    icon: icon3,
    text: "Цифровой двойник (загрузка программного кода из симулятора в реального робота за 2 клика)",
  },
];

const universalOptions = [
  ...localOptions,
  {
    id: 4,
    icon: icon4,
    text: "Аккаунт с функцией управления лицензиями, ключи отражают количество рабочих мест",
  },
  {
    id: 5,
    icon: icon5,
    text: "Встроенный конструктор собственных моделей роботов",
  },
  {
    id: 6,
    icon: icon6,
    text: "Дистанционный доступ к лицензии",
  },
];

const maximalOptions = [
  ...universalOptions,
  {
    id: 7,
    icon: icon7,
    text: "Методический комплекс с уроками и практическими работами на 256ч.",
  },
  {
    id: 8,
    icon: icon8,
    text: "Курс уникальных упражнений от тренерского состава сборной России по робототехнике",
  },
  {
    id: 9,
    icon: icon9,
    text: "Симуляция реальных кейсов в промышленных условиях",
  },
];

export const VERSION_TYPES = [
  {
    id: 1,
    title: "Локальный",
    options: localOptions,
    class : 'block_one',
  },
  {
    id: 2,
    title: "Универсальный",
    options: universalOptions,
    class : 'block_two',
  },
  {
    id: 3,
    title: "Максимальный",
    options: maximalOptions,
    class : 'block_three',
  },
];
