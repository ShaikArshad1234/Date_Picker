import React, { createContext, useState, useContext } from 'react';

const RecurrenceContext = createContext();

export const useRecurrence = () => useContext(RecurrenceContext);

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    pattern: 'daily',
    interval: 1,
    specificDays: [],
    nthDayOfMonth: null,
    startDate: null,
    endDate: null,
  });

  const updateRecurrence = (key, value) => {
    setRecurrence(prev => ({ ...prev, [key]: value }));
  };

  return (
    <RecurrenceContext.Provider value={{ recurrence, updateRecurrence }}>
      {children}
    </RecurrenceContext.Provider>
  );
};
