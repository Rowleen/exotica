import { FC } from 'react';
import { Trip } from '../../core/domain/entities/Trip';
import { Itinerary } from '../../core/domain/entities/Itinerary';

import styles from './tripDetails.module.sass';

interface TripDetailsProps {
  trip: Trip;
}

const TripDetails: FC<TripDetailsProps> = ({ trip }) => {
  return (
    <article className={styles.wrapper}>
      <img className={styles.photo} src={trip.photo_url} alt="Trip photo" />

      <div className={styles.info}>
        <h1 className={styles.title}>{trip.title}</h1>

        <div className={styles.action}></div>

        <p className={styles.description}>{trip.description}</p>

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
    </article>
  );
};

export default TripDetails;
