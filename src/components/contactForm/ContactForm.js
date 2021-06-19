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
      <input type="tel" value={newPhone} placeholder="Phone (123-456-7890)" onChange={(e) => {
        setNewPhone(e.target.value);
      }} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" />
      <input type="email" value={newEmail} placeholder="Email" onChange={(e) => {
        setNewEmail(e.target.value);
      }} />
      <input type="submit" />
    </form>
  );
};