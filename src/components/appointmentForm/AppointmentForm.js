import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker.js';

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
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTitle} placeholder="Title" onChange={(e) => {
        setNewTitle(e.target.value);
      }} />
      <input type="date" value={newDate} min={getTodayString()} onChange={(e) => {
        setNewDate(e.target.value);
      }} />
      <input type="time" value={newTime} onChange={(e) => {
        setNewTime(e.target.value);
      }} />
      <ContactPicker contacts={contacts} />
      <input type="submit" />
    </form>
  );
};
