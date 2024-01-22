import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import CustomGrid from './CustomGrid'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<CustomGrid cars={[]} />)

  // ACT
  await screen.findByText('No Rows To Show')

  // ASSERT
  expect(screen.getByText('No Rows To Show')).toBeDefined();
})