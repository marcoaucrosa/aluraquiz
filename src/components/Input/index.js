import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputQuiz = styled.input`
  margin-bottom: 24px;
  background-color: transparent;
  border: 1px solid #333;
  height: 40px;
  border-radius: 4px;
  color: #FFFFFF;
  padding: 0 15px;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid #8B0000;
  }
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputQuiz
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
