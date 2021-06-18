import React, { useState, useEffect } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm.js';
import { TileList } from '../../components/tileList/TileList.js';

export const ContactsPage = (props) => {
  /* 
  Extract array of contacts and the
  callback for adding contacts from
  the props object
  */
  const { contacts, addContact } = props;

  /* 
  Define state variables for 
  contact info and duplicate check
  */
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* 
    Add contact info and clear data 
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      addContact(newName, newPhone, newEmail);
    }
  };

  /* 
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const containsDuplicate = contacts.includes(contact => {
      return contact.name === newName; 
    });
    setIsDuplicate(containsDuplicate);
  }, [newName])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm newName={newName} newPhone={newPhone} newEmail={newEmail} setNewName={setNewName} setNewPhone={setNewPhone} setNewEmail={setNewEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
