import React, { useState, useEffect } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm.js';
import { TileList } from '../../components/tileList/TileList.js';

export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointment
}) => {
  /* 
  Define state variables for
  appointment info
  */
  const [newTitle, setNewTitle] = useState('');
  const [newContact, setNewContact] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* 
    Add contact info and clear data
    */
    addAppointment(newTitle, newContact, newDate, newTime);
    setNewTitle('');
    setNewContact('');
    setNewDate('');
    setNewTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm newTitle={newTitle} setNewTitle={setNewTitle} newContact={newContact} setNewContact={setNewContact} newDate={newDate} setNewDate={setNewDate} newTime={newTime} setNewTime={setNewTime} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments} />
      </section>
    </div>
  );
};
