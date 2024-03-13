import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {
  test('renders component properly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Chicago')).toBeInTheDocument();
    expect(screen.getByText("Today's Special :")).toBeInTheDocument();
  });

  test('renders Reserve A Table button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const reserveTableButton = screen.getByText('Reserve A Table');
    expect(reserveTableButton).toBeInTheDocument();
    expect(reserveTableButton.closest('a')).toHaveAttribute('href', '/reservations');
  });

  test('renders Today\'s Special dishes', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Greek Salad')).toBeInTheDocument();
    expect(screen.getByText('Greek Salad')).toBeInTheDocument();
    expect(screen.getByText('$12.99')).toBeInTheDocument();

    expect(screen.getByAltText('Brushetta')).toBeInTheDocument();
    expect(screen.getByText('Brushetta')).toBeInTheDocument();
    expect(screen.getByText('$7.99')).toBeInTheDocument();

    expect(screen.getByAltText('Pasta')).toBeInTheDocument();
    expect(screen.getByText('Pasta')).toBeInTheDocument();
    expect(screen.getByText('$4.99')).toBeInTheDocument();
  });
});
