import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';
import './DatePicker.css'; 

const DatePicker = () => {
  const { recurrence, updateRecurrence } = useRecurrence();

  return (
    <div className="date-picker">
      <label>Start Date:</label>
      <input
        type="date"
        value={recurrence.startDate || ''}
        onChange={e => updateRecurrence('startDate', e.target.value)}
      />

      <label>End Date:</label>
      <input
        type="date"
        value={recurrence.endDate || ''}
        onChange={e => updateRecurrence('endDate', e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
