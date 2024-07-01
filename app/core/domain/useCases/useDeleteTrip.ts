import { useMutation } from '@tanstack/react-query'
import TripImplementation from '../../Infrastructure/services/Trip.Implementation'

const tripImpl = new TripImplementation()

interface useDeleteTripArgs {
  handleDeleteTrip: (tripId: number) => void
  tripId: number
}

const useDeleteTrip = ({ handleDeleteTrip, tripId }: useDeleteTripArgs) => {
  return useMutation({
    mutationFn: (tripId: number) => tripImpl.delete(tripId),
    onSuccess: () => handleDeleteTrip(tripId)
  })
}

export default useDeleteTrip
