import { MainDemo } from '@/pages/MainDemo';
import { Todo } from '@/pages/Todo';
import { SomeError } from '@/components/SomeError';
import { Demo } from '@/pages/Demo';

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
