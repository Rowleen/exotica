import { useQuery } from '@tanstack/react-query';
import TripImplementation from '../../Infrastructure/services/Trip.Implementation';

const tripImpl = new TripImplementation();

const useGetTrips = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['getTrips'],
    queryFn: tripImpl.get
  });

  return { trips: data, isLoading };
};

export default useGetTrips;
