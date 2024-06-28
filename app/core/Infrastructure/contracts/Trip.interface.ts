import type { Trip } from '../../domain/entities/Trip';

export interface TripInterface {
  get(): Promise<Trip[]>;
  delete(tripId: number): Promise<void>;
}
