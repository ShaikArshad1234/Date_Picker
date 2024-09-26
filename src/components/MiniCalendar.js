import React from 'react';
import Calendar from 'react-calendar';
import './MiniCalendar.css'; 

const MiniCalendar = () => {
  const generateRecurringDates = () => {
    return [new Date(2024, 8, 15), new Date(2024, 8, 22)];
  };

  const recurringDates = generateRecurringDates();

  return (
    <div className="mini-calendar">
      <Calendar
        tileClassName={({ date }) =>
          recurringDates.some(d => d.toDateString() === date.toDateString()) ? 'highlight' : null
        }
      />
    </div>
  );
};

export default MiniCalendar;
