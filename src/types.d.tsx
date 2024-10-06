import { ChangeEvent, MouseEvent } from 'react';
import { compose, Dispatch } from 'redux';
import { match } from 'react-router';

export type PaginateType = (num: number) => void;

export type InputType = (event: ChangeEvent<HTMLInputElement>) => void;

export type ClickType = (event: MouseEvent) => void;

export type RouterFetchDataArgs = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: Dispatch<any>;
  cookies: string;
  match: match<{ slug: string }>;
};
