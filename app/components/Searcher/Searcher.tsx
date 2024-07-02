import { FC, FormEvent, useState } from 'react'
import Button from '../Button/Button'

import type { onChangeEvent } from '../../shared/types/onChangeEvent'

import styles from './searcher.module.sass'

interface SearcherProps {
  handleOnSearch: (searchTerm: string, e: FormEvent<HTMLFormElement>) => void
}

const Searcher: FC<SearcherProps> = ({ handleOnSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleOnChange = (event: onChangeEvent) =>
    setSearchTerm(event.target.value)

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleOnSearch(searchTerm, event)
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <input
        className={styles.input}
        placeholder='Search trips'
        onChange={handleOnChange}
      />

      <div className={styles.buttonWrapper}>
        <Button
          text='Search'
          type='submit'
          shape='button'
          color='primary'
          size='small'
        />
      </div>
    </form>
  )
}

export default Searcher
