import React from 'react';

export const AppointmentForm = ({
  contacts,
  newTitle,
  setNewTitle,
  newContact,
  setNewContact,
  newDate,
  setNewDate,
  newTime,
  setNewTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
    AppointmentForm
  );
};
