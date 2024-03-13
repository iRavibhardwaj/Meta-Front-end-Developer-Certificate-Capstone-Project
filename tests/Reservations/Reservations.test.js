import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Reservation from './Reservation';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Reservation component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders component properly', () => {
    render(
      <MemoryRouter>
        <Reservation />
      </MemoryRouter>
    );

    expect(screen.getByLabelText('Select a Date :')).toBeInTheDocument();
    expect(screen.getByLabelText('Select a Time Slot :')).toBeInTheDocument();
    expect(screen.getByLabelText('No. of Diners :')).toBeInTheDocument();
    expect(screen.getByLabelText('Ocassion :')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reserve' })).toBeInTheDocument();
  });

  test('submitting form calls navigate to /confirmation', () => {
    const mockNavigate = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <Reservation />
      </MemoryRouter>
    );

    fireEvent.submit(screen.getByRole('button', { name: 'Reserve' }));

    expect(mockNavigate).toHaveBeenCalledWith('/confirmation');
  });
});
