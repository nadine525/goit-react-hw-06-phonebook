import React from 'react';
import PropTypes from 'prop-types';
import ContactElement from '../ContactElement';
import { List } from './ContactList.styled';

const ContactList = ({ visibleContacts, deleteContact }) => {
  return (
    <List>
      {visibleContacts.map(visibleContact => (
        <ContactElement
          key={visibleContact.id}
          contact={visibleContact}
          deleteContact={deleteContact}
        />
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
