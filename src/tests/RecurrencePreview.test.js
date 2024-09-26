
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomRecurrenceOptions from '../components/CustomRecurrenceOptions';
import { RecurrenceProvider } from '../context/RecurrenceContext';

test('allows the user to select specific days for weekly recurrence', () => {
  const { getByLabelText, getByText } = render(
    <RecurrenceProvider>
      <CustomRecurrenceOptions />
    </RecurrenceProvider>
  );

  const mondayCheckbox = getByLabelText(/Monday/i);
  const wednesdayCheckbox = getByLabelText(/Wednesday/i);

  fireEvent.click(mondayCheckbox);
  fireEvent.click(wednesdayCheckbox);

  expect(mondayCheckbox.checked).toBe(true);
  expect(wednesdayCheckbox.checked).toBe(true);
});
