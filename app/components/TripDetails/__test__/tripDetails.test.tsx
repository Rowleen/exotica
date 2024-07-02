import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import TripDetails from '../TripDetails'

import tripMock from '../../../__mocks__/trip.mock.json'
import tripWithNoItineraryMock from '../../../__mocks__/tripWithNoItinerary.mock.json'

describe('Home', () => {
  const renderComponent = <TripDetails trip={tripMock} />

  it('renders trip details modal unchanged', () => {
    const { container } = render(renderComponent)
    expect(container).toMatchSnapshot()
  })

  it('render country name', () => {
    const { getByRole } = render(<TripDetails trip={tripMock} />)

    const heading = getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })

  it('render trip description', () => {
    const { getByTestId } = render(<TripDetails trip={tripMock} />)

    const description = getByTestId('description')

    expect(description).toBeInTheDocument()
  })

  it('render itineray days', () => {
    const { getByRole } = render(<TripDetails trip={tripMock} />)

    const itineraryHeading = getByRole('heading', { level: 2 })

    expect(itineraryHeading).toBeInTheDocument()
  })

  it('show message of no itinerary for this trip', () => {
    const { getByTestId, queryByRole } = render(
      <TripDetails trip={tripWithNoItineraryMock} />
    )

    const itineraryHeading = queryByRole('heading', { level: 2 })
    const message = getByTestId('no-itinerary')

    expect(itineraryHeading).not.toBeInTheDocument()
    expect(message).toBeInTheDocument()
  })
})
