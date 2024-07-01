import { useState } from 'react'
import { Trip } from '../core/domain/entities/Trip'

const useValidateForm = (formData: Trip) => {
  const [errors, setErrors] = useState({
    title: '',
    description: ''
  })

  const validate = () => {
    const { title, description, itinerary } = formData

    if (title.length! > 0) {
      setErrors({
        ...errors,
        title: 'This field is required'
      })
    } else if (errors.title.length > 0) {
      setErrors({ ...errors, title: '' })
    }

    if (description.length > 0 && description.length <= 240) {
      setErrors({
        ...errors,
        description: "This field is required and can't exceed 240 charactes"
      })
    } else if (errors.description.length > 0) {
      setErrors({ ...errors, description: '' })
    }

    return errors.title.length === 0 && errors.description.length === 0
      ? true
      : false
  }

  return { validate, errors }
}

export default useValidateForm
