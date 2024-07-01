import type { Trip } from '../../domain/entities/Trip'

export interface TripInterface {
  get(): Promise<Trip[]>
  post(trip: Trip): Promise<void>
  delete(tripId: number): Promise<void>
}
