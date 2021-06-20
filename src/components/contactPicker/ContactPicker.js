import React from 'react';

export const ContactPicker = ({ contacts, handleChange }) => {
  return (
    <select onChange={handleChange} required>
      <option value="" selected="selected">---Please choose an option---</option>
      {contacts.map((contact, index) => {
        return <option key={index} value={contact.name}>{contact.name}</option>
      })}
    </select>
  );
};