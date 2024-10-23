import React, { useEffect, ComponentType } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserInfo } from '@/store/userSlice';
import { AppState } from '@/store';

export const withAuth = <T extends object>(
  WrappedComponent: ComponentType<T>
) => {
  return (props: T) => {
    const dispatch = useDispatch();
    const { pending, isAuth, load } = useSelector(
      (state: AppState) => state.user
    );

    useEffect(() => {
      dispatch(getUserInfo() as any);
    }, [dispatch]);

    if ((pending && !isAuth) || load) {
      return (
        <div className="app">
          loading
          {/*<Loading />*/}
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};
