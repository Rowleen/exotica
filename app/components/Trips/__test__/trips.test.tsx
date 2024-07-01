import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import Trips from '../Trips'
import trips from '../../../__mocks__/trips.mock.json'

const queryClient = new QueryClient()

describe('Trips component', () => {
  const renderComponent = (
    <QueryClientProvider client={queryClient}>
      <Trips
        trips={trips}
        handleSelectTrip={jest.fn()}
        handleDeleteTrip={jest.fn()}
      />
    </QueryClientProvider>
  )

  it('renders Trips unchanged', () => {
    const { container } = render(renderComponent)
    expect(container).toMatchSnapshot()
  })

  it('render trip', () => {
    const { getByText } = render(renderComponent)

    const h2 = getByText('Hawaii')
    expect(h2).toBeInTheDocument()
  })

  it('Does not show trip wich it is not have been created', () => {
    const { queryByText } = render(renderComponent)

    const h2 = queryByText('EEUU')
    expect(h2).not.toBeInTheDocument()
  })

  it('render all trips', () => {
    const { getAllByRole } = render(renderComponent)

    const headings = getAllByRole('heading', { level: 2 })
    expect(headings).toHaveLength(7)
  })

  it("show worry message when there aren't trips", () => {
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Trips
          trips={[]}
          handleSelectTrip={jest.fn()}
          handleDeleteTrip={jest.fn()}
        />
      </QueryClientProvider>
    )

    const heading = getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })
})
