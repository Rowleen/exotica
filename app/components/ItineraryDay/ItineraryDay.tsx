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
            <option defaultValue='' disabled selected>
              Day
            </option>
            <option defaultValue='1'>1</option>
            <option defaultValue='2'>2</option>
            <option defaultValue='3'>3</option>
            <option defaultValue='4'>4</option>
            <option defaultValue='5'>5</option>
            <option defaultValue='6'>6</option>
            <option defaultValue='7'>7</option>
            <option defaultValue='8'>8</option>
            <option defaultValue='9'>9</option>
            <option defaultValue='10'>10</option>
            <option defaultValue='11'>11</option>
            <option defaultValue='12'>12</option>
            <option defaultValue='13'>13</option>
            <option defaultValue='14'>14</option>
            <option defaultValue='15'>15</option>
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
