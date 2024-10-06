export type LinkType = {
  name: string;
  linkTo: string;
};

export const overLinks: LinkType[] = [
  {
    name: 'Авторизация',
    linkTo: '/autorization'
  },
  {
    name: 'Регистрация',
    linkTo: '/registration'
  }
];

export const userLinks: LinkType[] = [
  {
    name: 'Главная',
    linkTo: '/'
  },
  {
    name: 'Туду',
    linkTo: '/todo'
  },
  {
    name: 'Демо',
    linkTo: '/demo'
  },

  {
    name: 'Иконки',
    linkTo: '/icons'
  },
  {
    name: 'Форум',
    linkTo: '/error'
  }
];
