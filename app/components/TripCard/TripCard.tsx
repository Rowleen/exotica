import { FC } from 'react';
import Button from '../Button/Button';

import styles from './tripCard.module.sass';

interface TripCardProps {
  title: string;
  photoUrl: string;
  description: string;
}

const TripCard: FC<TripCardProps> = ({ title, description, photoUrl }) => {
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
            <Button type="link" text="See trip details" onClick={() => null} />
          </div>

          <div className={styles.column}>
            <Button type="link" text="Edit" onClick={() => null} />
            <Button
              type="link"
              color="danger"
              text="Delete"
              onClick={() => null}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default TripCard;
