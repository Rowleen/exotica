import { FC } from 'react';
import useDeleteTrip from '../../core/domain/useCases/useDeleteTrip';
import Button from '../Button/Button';

import styles from './tripCard.module.sass';

interface TripCardProps {
  tripId: number;
  title: string;
  photoUrl: string;
  description: string;
  handleSelectTrip: Function;
}

const TripCard: FC<TripCardProps> = ({
  tripId,
  title,
  description,
  photoUrl,
  handleSelectTrip
}) => {
  const { mutate: deleteTrip } = useDeleteTrip();

  return (
    <article className={styles.card}>
      <img className={styles.photo} src={photoUrl} alt="Photo of the trip" />

      <div className={styles.details}>
        <div className={styles.description}>
          <h2 className={styles.title}>{title}</h2>

          <p>{description}</p>
        </div>

        <div className={styles.actionButtons}>
          <div className={styles.column}>
            <Button
              type="button"
              shape="link"
              text="See trip details"
              onClick={() => handleSelectTrip(tripId)}
            />
          </div>

          <div className={styles.column}>
            <Button
              type="button"
              shape="link"
              text="Edit"
              onClick={() => null}
            />
            <Button
              type="button"
              shape="link"
              color="danger"
              text="Delete"
              onClick={() => deleteTrip(tripId)}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default TripCard;
