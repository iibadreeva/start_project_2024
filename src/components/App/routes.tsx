import Test from '@/pages/App/App';
import Todo from '@/pages/Todo/Todo';
import { SomeError } from '@/components/SomeError';

export const routes = [
  {
    path: '/',
    component: Test,
    isPrivate: false,
    exact: true
  },
  {
    path: '/todo',
    component: Todo,
    isPrivate: true
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
