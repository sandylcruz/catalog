import styled from 'styled-components';

export const Button = styled.button`
  width: 160px;
  height: 45px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  border-radius: 45px;
  margin: 5px;
  background-color: #686cff;
  color: white;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;

  border: none;

  &:hover {
    // background-color: #18a7f7;
    box-shadow: 0px 15px 20px #18a7f7;
    transform: translateY(-4px);
  }

  &:active {
  }
`;

export const Input = styled.input``;
