
import React from 'react';
import { render } from '@testing-library/react';
import MiniCalendar from '../components/MiniCalendar';
import { RecurrenceProvider } from '../context/RecurrenceContext';

test('renders the mini-calendar without errors', () => {
  const { container } = render(
    <RecurrenceProvider>
      <MiniCalendar />
    </RecurrenceProvider>
  );

  expect(container.querySelector('.react-calendar')).toBeInTheDocument();
});
