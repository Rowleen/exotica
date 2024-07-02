import React, { FC } from 'react'
import { Itinerary } from '../../core/domain/entities/Itinerary'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'

import type { onChangeEvent } from '../../shared/types/onChangeEvent'

import styles from './itineraryDay.module.sass'

interface ItineraryFormProps {
  value: Itinerary
  onChange: (event: onChangeEvent) => void
}

const ItineraryForm: FC<ItineraryFormProps> = ({ onChange, value }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.day}>
        <div className={styles.leftColumn}>
          <select
            aria-label='day'
            name='day'
            className={styles.select}
            onChange={onChange}
            value={value.day}
          >
            <option defaultValue='' disabled>
              Day
            </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
          </select>
        </div>

        <div className={styles.rightColumn}>
          <Input
            ariaLabel='location'
            name='location'
            type='text'
            placeholder='Location'
            onChange={onChange}
            value={value.location}
          />
          <Textarea
            ariaLabel='itineraryDescription'
            name='description'
            placeholder='Description'
            rows={5}
            onChange={onChange}
            value={value.description}
          />
        </div>
      </div>
    </section>
  )
}

export default ItineraryForm
