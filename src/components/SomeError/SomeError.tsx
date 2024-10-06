import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './SomeError.module.scss';

type Props = {
  match: {
    path: string;
  };
};

const SomeError: FC<Props> = ({ match }) => {
  const text =
    match.path === '/error' ? 'Oops! Something wrong :(' : 'Oops! Not found :(';

  return (
    <div className={styles.error}>
      <div className={styles.sketch}>
        <div className={cn(styles.beeSketch, styles.red, styles.blue)} />
        <div className={styles.error.beeSketch} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{text || 'The game over'}</div>
        <Link
          className="inline-block bg-blue-500 text-white px-7 py-3 m-auto rounded-lg"
          to="/"
        >
          На главную?
        </Link>
      </div>
    </div>
  );
};

export { SomeError };
