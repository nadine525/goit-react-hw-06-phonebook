import React from 'react';
import { FaPhone } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Contact, Person } from './ContactElement.styled';
import { Button } from '../ContactForm/ContactForm.styled';
import { iconSize } from '../constans';

const ContactElement = ({ contact, deleteContact }) => {
  return (
    <Contact>
      <Person>
        <FaPhone size={iconSize.xs} /> {contact.name} : {contact.number}
      </Person>
      <Button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </Button>
    </Contact>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
