import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';
import './RecurrencePreview.css';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const CustomRecurrenceOptions = () => {
  const { recurrence, updateRecurrence } = useRecurrence();

  if (recurrence.pattern === 'weekly') {
    return (
      <div className="specific-days">
        <label>Select days of the week:</label>
        {daysOfWeek.map(day => (
          <label key={day}>
            <input
              type="checkbox"
              checked={recurrence.specificDays.includes(day)}
              onChange={() => {
                let newDays = [...recurrence.specificDays];
                if (newDays.includes(day)) {
                  newDays = newDays.filter(d => d !== day);
                } else {
                  newDays.push(day);
                }
                updateRecurrence('specificDays', newDays);
              }}
            />
            {day}
          </label>
        ))}
      </div>
    );
  }

  if (recurrence.pattern === 'monthly') {
    return (
      <div className="nth-day">
        <label>Select nth day of the month:</label>
        <input
          type="number"
          value={recurrence.nthDayOfMonth || ''}
          onChange={e => updateRecurrence('nthDayOfMonth', e.target.value)}
        />
      </div>
    );
  }

  return null;
};

export default CustomRecurrenceOptions;
