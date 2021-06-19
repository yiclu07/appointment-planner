import React from 'react';

export const ContactForm = ({
  newName,
  setNewName,
  newPhone,
  setNewPhone,
  newEmail,
  setNewEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newName} placeholder="Name" onChange={(e) => {
        setNewName(e.target.value);
      }} />
      <input type="tel" value={newPhone} placeholder="Phone" onChange={(e) => {
        setNewPhone(e.target.value);
      }} />
      <input type="email" value={newEmail} placeholder="Email" onChange={(e) => {
        setNewEmail(e.target.value);
      }} />
      <input type="submit" />
    </form>
  );
};