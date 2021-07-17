import styled from 'styled-components';

const Input = styled.input`
  border-radius: 40px;
  border: 1px solid grey;
  margin-bottom: 10px;

  width: 200px;
  height: 20px;
  padding: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin-top: 10px;

  &:focus {
    box-shadow: #e8e8ff 0px 0px 0px 5px;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }
`;

export default Input;
