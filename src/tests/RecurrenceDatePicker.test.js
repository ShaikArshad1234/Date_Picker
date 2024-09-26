
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RecurrenceDatePicker from '../components/RecurrenceDatePicker';
import { RecurrenceProvider } from '../context/RecurrenceContext';

test('integration test: date picker and recurrence options work together', () => {
  const { getByLabelText, getByText } = render(
    <RecurrenceProvider>
      <RecurrenceDatePicker />
    </RecurrenceProvider>
  );

  const startDateInput = getByLabelText(/Start Date:/i);
  fireEvent.change(startDateInput, { target: { value: '2024-09-10' } });
  expect(startDateInput.value).toBe('2024-09-10');

  const patternSelect = getByLabelText(/Recurrence Pattern:/i);
  fireEvent.change(patternSelect, { target: { value: 'weekly' } });
  expect(patternSelect.value).toBe('weekly');

  const intervalInput = getByLabelText(/Repeat every:/i);
  fireEvent.change(intervalInput, { target: { value: '3' } });
  expect(intervalInput.value).toBe('3');

  const mondayCheckbox = getByLabelText(/Monday/i);
  fireEvent.click(mondayCheckbox);
  expect(mondayCheckbox.checked).toBe(true);

  const fridayCheckbox = getByLabelText(/Friday/i);
  fireEvent.click(fridayCheckbox);
  expect(fridayCheckbox.checked).toBe(true);

  const calendar = document.querySelector('.react-calendar');
  expect(calendar).toBeInTheDocument();
});
