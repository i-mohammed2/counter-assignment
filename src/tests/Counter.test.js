// import necessary react testing library helpers here
// import the Counter component here
import React from 'react'
import Counter from '../components/Counter'
import { screen, fireEvent } from '@testing-library/react'


import { render } from "@testing-library/react";

// Declare the variables here
let counterMessage;
let count;
let incrementButton;
let decrementButton;

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
  counterMessage = screen.getByText('Counter')
  count = screen.getByTestId('count')
  incrementButton = screen.getByRole('button', { name: '+' })
  decrementButton = screen.getByRole('button', { name: '-' })
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  //expect(counterMessage).toBeInTheDocument()
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(count).toHaveTextContent('0')
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(incrementButton)
  expect(count).toHaveTextContent('1')
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(decrementButton)
  expect(count).toHaveTextContent('-1')
});
