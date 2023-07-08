import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './Filter.styled';
import { Input } from '../ContactForm/ContactForm.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <Label>
      Find Contacts by name
      <Input type="text" value={filter} onChange={onChange} />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
