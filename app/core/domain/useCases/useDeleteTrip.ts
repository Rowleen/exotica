import { useMutation } from '@tanstack/react-query';
import TripImplementation from '../../Infrastructure/services/Trip.Implementation';

const tripImpl = new TripImplementation();

const useDeleteTrip = () => {
  return useMutation({
    mutationFn: (tripId: number) => tripImpl.delete(tripId)
  });
};

export default useDeleteTrip;
