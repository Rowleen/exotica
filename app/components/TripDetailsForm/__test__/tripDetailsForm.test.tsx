import React from 'react'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import TripDetailsForm from '../TripDetailsForm'

const queryClient = new QueryClient()

import tripMock from '../../../__mocks__/trip.mock.json'
import tripWithNoItineraryMock from '../../../__mocks__/tripWithNoItinerary.mock.json'

describe('Home', () => {
  const renderComponent = (
    <QueryClientProvider client={queryClient}>
      <TripDetailsForm trip={tripMock} action='edit' />
    </QueryClientProvider>
  )

  it('renders trip details form modal unchanged', () => {
    const { container } = render(renderComponent)
    expect(container).toMatchSnapshot()
  })

  it('render country name', () => {
    const { getByDisplayValue } = render(renderComponent)

    const titleField = getByDisplayValue(tripMock.title)

    expect(titleField).toBeInTheDocument()
  })

  it('render trip description', () => {
    const { getByDisplayValue } = render(renderComponent)

    const descriptionField = getByDisplayValue(tripMock.description)

    expect(descriptionField).toBeInTheDocument()
  })

  it('render trip description', () => {
    const { getByDisplayValue } = render(renderComponent)

    const descriptionField = getByDisplayValue(tripMock.description)

    expect(descriptionField).toBeInTheDocument()
  })

  it('render trip photo url', () => {
    const { getByDisplayValue } = render(renderComponent)

    const photoUrlField = getByDisplayValue(tripMock.photo_url)

    expect(photoUrlField).toBeInTheDocument()
  })

  it('render two days of itinerary', () => {
    const { getAllByLabelText } = render(renderComponent)

    const itinerary = getAllByLabelText('location')

    expect(itinerary).toHaveLength(tripMock.itinerary.length)
  })

  test("no render itineray when it won't be created by user", () => {
    const { queryByLabelText } = render(
      <QueryClientProvider client={queryClient}>
        <TripDetailsForm trip={tripWithNoItineraryMock} action='edit' />
      </QueryClientProvider>
    )

    const itinerary = queryByLabelText('location')

    expect(itinerary).toBeNull
  })
})
