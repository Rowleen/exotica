import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import Home from '../../page'

const queryClient = new QueryClient()

describe('Home', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    )
    expect(container).toMatchSnapshot()
  })

  it('renders a heading', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    )

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})
