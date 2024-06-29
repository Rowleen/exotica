import { Itinerary } from './Itinerary';

export type Trip = {
  readonly id: number;
  title: string;
  description: string;
  photo_url: string;
  status: string;
  itinerary: Itinerary[];
};
