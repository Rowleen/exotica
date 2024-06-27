import { FC, FormEvent } from 'react';
import Button from '../Button/Button';

import styles from './searcher.module.sass';

const Searcher: FC = () => {
  const k = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('holi');
  };

  return (
    <form className={styles.searchForm} onSubmit={k}>
      <input className={styles.input} placeholder="Search trips" />

      <div className={styles.buttonWrapper}>
        <Button
          text="Search"
          color="primary"
          size="small"
          onClick={() => null}
        />
      </div>
    </form>
  );
};

export default Searcher;
