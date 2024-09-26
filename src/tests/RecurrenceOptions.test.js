
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RecurrenceOptions from '../components/RecurrenceOptions';
import { RecurrenceProvider } from '../context/RecurrenceContext';

test('allows the user to select recurrence pattern and interval', () => {
  const { getByLabelText, getByText } = render(
    <RecurrenceProvider>
      <RecurrenceOptions />
    </RecurrenceProvider>
  );

  const patternSelect = getByLabelText(/Recurrence Pattern:/i);
  const intervalInput = getByLabelText(/Repeat every:/i);

  fireEvent.change(patternSelect, { target: { value: 'weekly' } });
  fireEvent.change(intervalInput, { target: { value: '2' } });

  expect(patternSelect.value).toBe('weekly');
  expect(intervalInput.value).toBe('2');
});
