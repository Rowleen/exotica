import { FormEvent, useEffect, useState, useCallback } from 'react'
import type { Trip } from '../core/domain/entities/Trip'
import useGetTrips from '../core/domain/useCases/useGetTrips'

const useFilterTrips = () => {
  const { trips: tripsToFilter, isLoading } = useGetTrips()

  const [trips, setFilteredTrips] = useState<Trip[]>([])

  useEffect(() => {
    if (tripsToFilter) {
      setFilteredTrips(tripsToFilter)
    }
  }, [tripsToFilter, isLoading])

  const handleFilterByStatus = useCallback(
    (event: React.MouseEvent) => {
      const { value } = event.target as HTMLTextAreaElement

      if (value === 'all' && !isLoading && tripsToFilter) {
        setFilteredTrips(tripsToFilter)
      }
      if (value === 'toDo' && !isLoading && tripsToFilter) {
        const toDoTrips = tripsToFilter?.filter(trip => trip.status === 'todo')
        setFilteredTrips(toDoTrips)
      }
      if (value === 'done' && !isLoading && tripsToFilter) {
        const doneTrips = tripsToFilter?.filter(trip => trip.status === 'done')
        setFilteredTrips(doneTrips)
      }
    },
    [isLoading, tripsToFilter]
  )

  const handleFilterByTerm = useCallback(
    (searchTerm: string, event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (searchTerm && tripsToFilter && !isLoading) {
        const regex = new RegExp(searchTerm, 'i')

        const resultTrips = tripsToFilter?.filter(
          trip => regex.test(trip.title) || regex.test(trip.description)
        )
        setFilteredTrips(resultTrips)
      }
    },
    [isLoading, tripsToFilter]
  )

  const handleDeleteTrip = (tripId: number) => {
    if (tripsToFilter) {
      const resultTrips = tripsToFilter.filter(
        (trip: Trip) => trip.id !== tripId
      )
      setFilteredTrips(resultTrips)
    }
  }

  return {
    trips,
    isLoading,
    handleFilterByStatus,
    handleFilterByTerm,
    handleDeleteTrip
  }
}

export default useFilterTrips
