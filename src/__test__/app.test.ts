import { waitFor, screen } from '@testing-library/react'
import { getPage } from 'next-page-tester'

test('Should render the text', async () => {
  const { render } = await getPage({ route: '/search' })

  render()

  await waitFor(() => {
    expect(
      screen.getByText('Something went wrong, please try again'),
    ).toBeInTheDocument()
  })
})
