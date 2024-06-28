import { FC, FormEvent, useState } from 'react';
import Button from '../Button/Button';

import styles from './searcher.module.sass';

interface SearcherProps {
  handleOnSearch: (searchTerm: string, e: FormEvent<HTMLFormElement>) => void;
}

const Searcher: FC<SearcherProps> = ({ handleOnSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <form
      className={styles.searchForm}
      onSubmit={(e) => handleOnSearch(searchTerm, e)}
    >
      <input
        className={styles.input}
        placeholder="Search trips"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className={styles.buttonWrapper}>
        <Button
          text="Search"
          type="submit"
          shape="button"
          color="primary"
          size="small"
        />
      </div>
    </form>
  );
};

export default Searcher;
