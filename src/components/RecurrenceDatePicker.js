import React from 'react';
import DatePicker from './DatePicker';
import RecurrenceOptions from './RecurrenceOptions';
import CustomRecurrenceOptions from './RecurrencePreview';
import MiniCalendar from './MiniCalendar';
import { RecurrenceProvider } from '../context/RecurrenceContext';
import './RecurrenceDatePicker.css'; 

const RecurrenceDatePicker = () => {
  return (
    <RecurrenceProvider>
      <div className="recurrence-date-picker">
        <h2>Select Recurring Dates</h2>
        <DatePicker />
        <RecurrenceOptions />
        <CustomRecurrenceOptions />
        <MiniCalendar />
      </div>
    </RecurrenceProvider>
  );
};

export default RecurrenceDatePicker;
