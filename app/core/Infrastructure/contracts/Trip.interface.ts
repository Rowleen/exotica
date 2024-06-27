import type { Trip } from '../../domain/entities/Trip';

export interface TripInterface {
  get(): Promise<Trip[]>;
}
