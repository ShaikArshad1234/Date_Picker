
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DatePicker from '../components/DatePicker';
import { RecurrenceProvider } from '../context/RecurrenceContext';

test('allows the user to select start and end dates', () => {
  const { getByLabelText } = render(
    <RecurrenceProvider>
      <DatePicker />
    </RecurrenceProvider>
  );

  const startDateInput = getByLabelText(/Start Date:/i);
  const endDateInput = getByLabelText(/End Date:/i);

  fireEvent.change(startDateInput, { target: { value: '2024-09-15' } });
  fireEvent.change(endDateInput, { target: { value: '2024-09-20' } });

  expect(startDateInput.value).toBe('2024-09-15');
  expect(endDateInput.value).toBe('2024-09-20');
});
