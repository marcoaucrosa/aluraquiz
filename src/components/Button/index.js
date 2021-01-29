import styled from 'styled-components';

const Button = styled.button`
  height: 40px;
  border-radius: 4px;
  color: #FFFFFF;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: #8B0000;
  border: 1px solid #8B0000;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  font-weight: bold;
  letter-spacing: 1.25px;
  width: 100%;
  &:focus,
  &:hover {
    outline: none;
    opacity: 0.5;
  }
  &:disabled {
    background-color: #8b0000b5;
    border-color: #8b0000b5;
  }
`;

export default Button;
