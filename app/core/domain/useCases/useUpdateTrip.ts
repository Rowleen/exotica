import { useMutation } from '@tanstack/react-query'
import TripImplementation from '../../Infrastructure/services/Trip.Implementation'
import { Trip } from '../entities/Trip'

const tripImpl = new TripImplementation()

const useUpdateTrip = () => {
  return useMutation({
    mutationFn: (trip: Trip) => tripImpl.update(trip)
  })
}

export default useUpdateTrip
