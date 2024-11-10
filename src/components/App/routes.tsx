import { MainDemo } from '@/pages/MainDemo';
import { Todo } from '@/pages/Todo';
import { SomeError } from '@/components/SomeError';
import { Demo } from '@/pages/Demo';
import { Auth } from '@/pages/Auth';
import { Signup } from '@/pages/Signup';
import { Messenger } from '@/pages/Messenger';
import { Pdf } from '@/pages/Pdf';

export const routes = [
  {
    path: '/',
    component: MainDemo,
    isPrivate: false,
    exact: true
  },
  {
    path: '/todo',
    component: Todo,
    isPrivate: true
  },
  {
    path: '/demo',
    component: Demo,
    isPrivate: false
  },
  {
    path: '/pdf',
    component: Pdf,
    isPrivate: false
  },
  {
    path: '/auth',
    component: Auth,
    isPrivate: false
  },
  {
    path: '/signup',
    component: Signup,
    isPrivate: false
  },
  {
    path: '/messenger',
    component: Messenger,
    isPrivate: false
  },
  {
    path: '/error',
    component: SomeError,
    isPrivate: false
  },
  {
    path: '*',
    component: SomeError,
    isPrivate: false
  }
];
