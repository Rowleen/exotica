import { FC } from 'react';
import type { Trip } from '../../core/domain/entities/Trip';
import TripCard from '../TripCard/TripCard';

import styles from './trips.module.sass';

interface TripsProps {
  trips: Trip[] | undefined;
  handleSelectTrip: (tripId: number) => void;
}

const Trips: FC<TripsProps> = ({ trips, handleSelectTrip }) => {
  return (
    <section className={styles.trips}>
      {trips ? (
        trips.map((trip, index) => (
          <TripCard
            key={index + trip.id}
            tripId={trip.id}
            title={trip.title}
            photoUrl={trip.photo_url}
            description={trip.description}
            handleSelectTrip={handleSelectTrip}
          />
        ))
      ) : (
        <h2>We&apos;re so sorry. We haven&apos;t trips yet 😓</h2>
      )}
    </section>
  );
};

export default Trips;
