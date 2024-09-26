import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';
import './RecurrenceOptions.css'; 

const RecurrenceOptions = () => {
  const { recurrence, updateRecurrence } = useRecurrence();

  return (
    <div className="recurrence-options">
      <label>Recurrence Pattern:</label>
      <select
        value={recurrence.pattern}
        onChange={e => updateRecurrence('pattern', e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      <label>Repeat every:</label>
      <input
        type="number"
        value={recurrence.interval}
        onChange={e => updateRecurrence('interval', e.target.value)}
      />

      <span>{recurrence.pattern}</span>
    </div>
  );
};

export default RecurrenceOptions;
