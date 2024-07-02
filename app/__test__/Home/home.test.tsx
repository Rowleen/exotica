import React from 'react'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import Home from '../../page'

const queryClient = new QueryClient()

describe('Home', () => {
  const renderComponent = (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )

  it('renders homepage unchanged', () => {
    const { container } = render(renderComponent)
    expect(container).toMatchSnapshot()
  })

  it('renders the title and subtitle of the app', () => {
    const { getByRole } = render(renderComponent)

    const heading = getByRole('heading', { level: 1 })
    const subHeading = getByRole('heading', { level: 2 })

    expect(heading).toBeInTheDocument()
    expect(subHeading).toBeInTheDocument()
  })

  it('render the pills of sorting trips list', () => {
    const { getByRole } = render(renderComponent)

    const pillAll = getByRole('button', { name: 'All' })
    const pillUpComing = getByRole('button', { name: 'Upcoming' })
    const pillComplete = getByRole('button', { name: 'Complete' })

    expect(pillAll).toBeInTheDocument()
    expect(pillUpComing).toBeInTheDocument()
    expect(pillComplete).toBeInTheDocument()
  })
})
