import { FC, useCallback, useState } from 'react'
import Image from 'next/image'
import useCreateTrip from '../../core/domain/useCases/useCreateTrip'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import Button from '../Button/Button'
import ItineraryDay from '../ItineraryDay/ItineraryDay'

import styles from './tripDetailsForm.module.sass'

const TripDetailsForm: FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    photo_url: '',
    status: 'todo',
    itinerary: [
      {
        day: 1,
        location: '',
        description: ''
      }
    ]
  })

  const { mutate: createTrip } = useCreateTrip()

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index?: number
  ) => {
    const { name, value } = event.target

    // @ts-expect-error
    if (typeof index !== false && index !== undefined) {
      return setFormData({
        ...formData,
        itinerary: formData.itinerary.map((day, i) =>
          i === index ? { ...day, [name]: value } : day
        )
      })
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleAddItineraryDay = () => {
    const day = {
      day: 1,
      location: '',
      description: ''
    }

    setFormData({
      ...formData,
      itinerary: [...formData.itinerary, day]
    })
  }

  const handleSubmit = (event: React.MouseEvent) => {
    createTrip(formData)
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Create a trip</h2>

      <form>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name*</label>
          <Input
            name='title'
            type='text'
            placeholder='Country'
            onChange={event => handleInputChange(event)}
            value={formData.title}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Description (max. 240 characters)
          </label>
          <Textarea
            name='description'
            rows={5}
            placeholder='From Rome to Venice'
            onChange={event => handleInputChange(event)}
            value={formData.description}
            required
            maxLength={240}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Image</label>
          <Input
            name='photo_url'
            type='url'
            placeholder='Image URL'
            onChange={event => handleInputChange(event)}
            value={formData.photo_url}
            pattern='[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?'
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
            onClick={handleAddItineraryDay}
          />
        </div>

        {formData.itinerary.map((day, index) => (
          <ItineraryDay
            key={day.location + index}
            value={formData.itinerary[index]}
            onChange={event => handleInputChange(event, index)}
          />
        ))}

        <Button
          text='Save'
          type='submit'
          shape='button'
          size='medium'
          color='primary'
          onClick={event => handleSubmit(event)}
        />
      </form>
    </section>
  )
}

export default TripDetailsForm
