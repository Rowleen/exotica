import { Trip } from '../../domain/entities/Trip'
import { TripInterface } from '../contracts/Trip.interface'

const METHOD = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
  PATCH: 'patch'
}

const endpoint =
  'https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels'

export default class TripImplementation implements TripInterface {
  constructor() {}

  public get = async (): Promise<Trip[]> => {
    const response = await fetch(endpoint, {
      method: METHOD.GET
    })

    return await response.json()
  }

  public post = async (trip: Trip): Promise<void> => {
    await fetch(endpoint, {
      method: METHOD.POST,
      body: JSON.stringify(trip),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
  }

  public update = async (trip: Trip): Promise<Trip> => {
    const response = await fetch(`${endpoint}/${trip.id}`, {
      method: METHOD.PUT,
      body: JSON.stringify(trip),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

    return await response.json()
  }

  public delete = async (tripId: number) => {
    await fetch(`${endpoint}/${tripId}`, {
      method: METHOD.DELETE
    })
  }
}
