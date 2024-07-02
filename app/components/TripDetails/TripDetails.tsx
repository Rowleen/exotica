import { FC } from 'react'
import { Trip } from '../../core/domain/entities/Trip'
import { Itinerary } from '../../core/domain/entities/Itinerary'
import classNames from 'classnames'

import styles from './tripDetails.module.sass'

interface TripDetailsProps {
  trip: Trip
}

const TripDetails: FC<TripDetailsProps> = ({ trip }) => {
  const descriptionClass = classNames({
    [styles.description]: true,
    [styles.descriptionNoBottom]: trip.itinerary.length === 0
  })

  return (
    <article className={styles.wrapper}>
      <img className={styles.photo} src={trip.photo_url} alt='Trip photo' />

      <div className={styles.info}>
        <h1 className={styles.title}>{trip.title}</h1>

        <div className={styles.action}></div>

        <p data-testid='description' className={descriptionClass}>
          {trip.description}
        </p>

        {trip.itinerary.length > 0 ? (
          <div className={styles.itineraryWrapper}>
            <h2 className={styles.itineraryTitle}>Itinerary</h2>

            {trip.itinerary.map((step: Itinerary, index) => (
              <div key={index + step.day} className={styles.step}>
                <h3 className={styles.stepTitle}>
                  Day {step.day}: {step.location}
                </h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p data-testid='no-itinerary' className={styles.itineraryInfo}>
            With no itinerary yet 😮
          </p>
        )}
      </div>
    </article>
  )
}

export default TripDetails
