import { FC } from 'react'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import Button from '../Button/Button'
import ItineraryDay from '../ItineraryDay/ItineraryDay'

import styles from './tripDetailsForm.module.sass'

type Inputs = {
  name: string
  introduction: string
  description: string
  photo_url: string
}

const TripDetailsForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  console.log(watch('name'))

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Create a trip</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name*</label>
          <Input
            type='text'
            placeholder='Country'
            {...(register('name'), { require: true })}
          />
          {errors.name && (
            <span className={styles.error}>This field is required</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Introduction (max. 240 characters)*
          </label>
          <Textarea
            rows={3}
            placeholder='From Rome to Venice'
            {...register('introduction', { maxLength: 240 })}
          />
          {errors.name && (
            <span className={styles.error}>
              You have exceeded the number of characters
            </span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Description</label>
          <Textarea
            rows={5}
            placeholder='From Rome to Venice'
            {...register('description')}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Image</label>
          <Input
            type='url'
            placeholder='Image URL'
            {...register('photo_url')}
          />
        </div>

        <div className={styles.itineraryHeader}>
          <label className={styles.label}>Day by day itinerary</label>

          <Image
            className={styles.iconAdd}
            src='/images/plus-circle.svg'
            alt='Add icon'
            width={0}
            height={0}
            role='button'
            onClick={() => null}
          />
        </div>

        <ItineraryDay />

        <Button
          text='Save'
          type='submit'
          shape='button'
          size='medium'
          color='primary'
        />
      </form>
    </section>
  )
}

export default TripDetailsForm
