import { Trip } from '../../domain/entities/Trip'
import { TripInterface } from '../contracts/Trip.interface'

const METHOD = {
  get: 'get',
  post: 'post',
  delete: 'delete',
  patch: 'patch'
}

const endpoint =
  'https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels'

export default class TripImplementation implements TripInterface {
  constructor() {}

  public get = async (): Promise<Trip[]> => {
    const response = await fetch(endpoint, {
      method: METHOD.get
    })

    return await response.json()
  }

  public post = async (trip: Trip): Promise<void> => {
    const response = await fetch(endpoint, {
      method: METHOD.post,
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

    console.log(await response.json())

    return await response.json()
  }

  public delete = async (tripId: number) => {
    fetch(`${endpoint}/${tripId}`, {
      method: METHOD.delete
    })
  }
}
