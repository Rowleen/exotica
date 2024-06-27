import { Trip } from '../../domain/entities/Trip';
import { TripInterface } from '../contracts/Trip.interface';

type Method = 'get' | 'delete' | 'patch';

const endpoint =
  'https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels';

export default class TripImplementation implements TripInterface {
  constructor() {}

  public get = async (): Promise<Trip[]> => {
    const response = await fetch(endpoint);

    return await response.json();
  };
}
