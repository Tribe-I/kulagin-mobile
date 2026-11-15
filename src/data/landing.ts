export const LANDING_URL = 'https://tribe-i.ru/kulagin/landing/';

export const hero = {
  eyebrow: 'Сообщество инвесторов',
  title: 'Рынок, идеи и люди — в одном месте',
  lead:
    'Главная страница сообщества в мобильном инвестиционном приложении: ' +
    'короткая сводка по рынку, темы дня, свежие идеи и авторы, за которыми стоит следить.',
};

export const marketSummary = {
  code: 'IMOEX2',
  label: 'Индекс МосБиржи',
  value: '2 874,15',
  unit: 'пт',
  change: '▲ +23,96 (+0,84%)',
  isUp: true,
  period: 'за день',
  notes: [
    'Индекс растёт третью сессию подряд на фоне спроса на бумаги нефтегаза.',
    'Рубль стабилен, инвесторы ждут решения ЦБ по ключевой ставке.',
    'Обороты выше средних за месяц — активность частных инвесторов растёт.',
  ],
};

export type Topic = {
  code: string;
  title: string;
  postsCount: string;
};

export const topics: Topic[] = [
  { code: 'key-rate', title: 'Решение ЦБ по ключевой ставке', postsCount: '248 постов' },
  { code: 'oil', title: 'Цены на нефть и экспорт', postsCount: '173 поста' },
  { code: 'dividends', title: 'Сезон дивидендов: кто заплатит', postsCount: '156 постов' },
  { code: 'rub', title: 'Курс рубля и валютная выручка', postsCount: '121 пост' },
  { code: 'ipo', title: 'Новые IPO на Мосбирже', postsCount: '94 поста' },
];

export type Idea = {
  title: string;
  tag: string;
  potential: string;
};

export const ideas: Idea[] = [
  { title: 'Покупка банковского сектора на снижении ставки', tag: 'лонг · 6 мес.', potential: '+18%' },
  { title: 'Дивидендная корзина из 5 компаний', tag: 'доход · 12 мес.', potential: '+14%' },
  { title: 'Длинные ОФЗ под цикл смягчения', tag: 'облигации · 12 мес.', potential: '+22%' },
];

export type Author = {
  code: string;
  initials: string;
  color: string;
  name: string;
  yield: string;
};

export const authors: Author[] = [
  { code: 'maria-v', initials: 'МВ', color: '#7c5cff', name: 'Мария В.', yield: '+34,2% за год' },
  { code: 'denis-k', initials: 'ДК', color: '#ff8a3d', name: 'Денис К.', yield: '+27,9% за год' },
  { code: 'olga-s', initials: 'ОС', color: '#12a19a', name: 'Ольга С.', yield: '+21,4% за год' },
];

export const authorsNote = 'Все цифры, новости и имена на странице — демо-данные для макета.';

export const footerText = '© 2026 Алексей Кулагин · продакт-менеджер сообщества';
