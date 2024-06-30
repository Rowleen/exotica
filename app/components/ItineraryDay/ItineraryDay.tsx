import React, { FC } from 'react'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'

import styles from './itineraryDay.module.sass'

interface ItineraryFormProps {}

const ItineraryForm: FC<ItineraryFormProps> = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.day}>
        <div className={styles.leftColumn}>
          <select className={styles.select}>
            <option value='' disabled selected>
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
          <Input type='text' placeholder='Location' />
          <Textarea placeholder='Description' rows={5} />
        </div>
      </div>
    </section>
  )
}

export default ItineraryForm
